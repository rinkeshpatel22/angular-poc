import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/user';
import { UserStateService } from '../../services/user-state.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  public user: User | undefined;
  private subscriber: Subscription | undefined;

  constructor(private userStateService: UserStateService) { }

  ngOnInit(): void {
    this.subscriber = this.userStateService.userSelectEvent.subscribe((user: User) => this.user = user);
  }

  ngOnDestroy(): void {
    this.subscriber?.unsubscribe();
  }
}
