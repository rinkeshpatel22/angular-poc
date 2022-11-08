import { Component, OnInit } from '@angular/core';
import { VirtualScrollDataService } from '../../../../feature/posts/services/virtual-scroll-data.service';
import { UserService } from '../../../../feature/users/services/user.service';
import { PostResponse } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  postDataSource: any | undefined;

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getPostList();
  }

  private getPostList(): void {
    this.postService.getCarts().subscribe((response: PostResponse) => {
      this.postDataSource = new VirtualScrollDataService(
        response.posts,
        this.userService
      );
    });
  }
}
