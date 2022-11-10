import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Subscription } from 'rxjs';
import { switchMap, tap, finalize } from 'rxjs/operators';
import { User, UserResponse } from '../../models/user';
import { UserStateService } from '../../services/user-state.service';
import { UserService } from '../../services/user.service';

export interface IUserResponse {
  total: number;
  results: User[];
}

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent implements OnInit, OnDestroy {
  public filteredUsers: User[] = [];
  public userFormGroup: FormGroup = this.formBuilder.group({ userInput: null });
  public isLoading = false;
  public subscriber?: Subscription;
  @ViewChild('autoComplete') public autoComplete: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private userStateService: UserStateService
  ) {}

  ngOnInit() {
    this.subscriber = this.userFormGroup
      ?.get('userInput')
      ?.valueChanges.pipe(
        tap(() => (this.isLoading = true)),
        switchMap((value: string) =>
          this.userService
            .searchUser(value)
            .pipe(finalize(() => (this.isLoading = false)))
        )
      )
      .subscribe(
        (response: UserResponse) => (this.filteredUsers = response.users)
      );
  }

  public displaySelectedUser(user: any): string {
    return user ? `${user.firstName} ${user.lastName}` : '';
  }

  public onOptionSelect(event: MatAutocompleteSelectedEvent): void {
    this.userStateService?.onUserSelect(event.option.value);
  }

  ngOnDestroy(): void {
    this.subscriber?.unsubscribe();
  }
}
