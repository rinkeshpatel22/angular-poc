import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [SearchUserComponent, UsersPageComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
})
export class UsersModule {}
