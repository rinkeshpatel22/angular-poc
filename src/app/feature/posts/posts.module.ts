import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { UserService } from '../users/services/user.service';

@NgModule({
  declarations: [PostListComponent],
  imports: [CommonModule, PostsRoutingModule, HttpClientModule, SharedModule],
  providers: [PostService, UserService],
})
export class PostsModule {}
