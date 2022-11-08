import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  public userSelectEvent = new Subject<User>();

  // called on user select/search
  public onUserSelect(user: User): void {
    this.userSelectEvent.next(user);
  }
}
