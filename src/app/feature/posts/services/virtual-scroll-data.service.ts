import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { UserService } from '../../users/services/user.service';

export class VirtualScrollDataService extends DataSource<string | undefined> {

  public items: any[];
  public userService: UserService;
  public dataStream: BehaviorSubject<any>;
  public subscription = new Subscription();
  private userIdList: number[] = [];
  private fetchedUsers: any[] = [];
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    items: any[],
    userService: UserService
  ) {
    super();
    this.items = items;
    this.userService = userService;
    this.dataStream = new BehaviorSubject<(any)[]>(items);
  }

  connect(collectionViewer: CollectionViewer): Observable<(any)[]> {
    this.subscription.add(
      collectionViewer.viewChange.subscribe((range) => {
        this.getUsers(range.start, range.end);
      })
    );

    return this.dataStream;
  }

  private getUsers(startIndex: number, endIndex: number): void {
    let indexCount = startIndex || 0;
    let tempUserIdList: any[] = [];
    while (indexCount < endIndex) {
      const id = this.items[indexCount]?.userId;
      if (this.userIdList.includes(id)) {
        const user = this.fetchedUsers.find(user => user.id === id);
        this.items[indexCount] = { ...this.items[indexCount], ...user };
      } else if (!tempUserIdList.includes(id)) {
        tempUserIdList?.push(id);
      }
      indexCount++;
    }

    this.ngUnsubscribe.next();
    tempUserIdList.forEach(userId => {
      this.userService.getUserById(userId)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(response => {
          let item = this.items.find(item => item.userId === response.id);
          if (item) {
            const index = this.items.indexOf(item);
            const user = {
              firstName: response.firstName,
              lastName: response.lastName,
              email: response.email,
              image: response.image
            };
            this.fetchedUsers.push({ ...user, id: response.id });
            this.items[index] = { ...this.items[index], ...user };
          }
          this.userIdList = [...new Set([...this.userIdList, ...tempUserIdList])];
        });
    });
    this.dataStream.next(this.items);
  }

  disconnect(): void {
    this.subscription.unsubscribe();
  }
}