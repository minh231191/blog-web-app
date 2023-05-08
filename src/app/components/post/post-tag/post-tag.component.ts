import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Direction } from 'src/app/model/Direction';
import { PostDisplay } from 'src/app/model/PostDisplay';
import { PostFilter } from 'src/app/model/PostFilter';
import { PostPaged } from 'src/app/model/PostPaged';
import { TagDisplay } from 'src/app/model/TagDisplay';
import { PostService } from 'src/app/services/post.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-post-tag',
  templateUrl: './post-tag.component.html',
  styleUrls: ['./post-tag.component.scss']
})
export class PostTagComponent implements OnInit {

  selectedTag!: TagDisplay;
  posts: PostDisplay[] = [];
  isFirstPage = false;
  isLastPage = false;
  postFilter: PostFilter = {} as PostFilter;

  constructor(private postService: PostService, private tagService: TagService, private route: ActivatedRoute) {
    route.params.subscribe(() => {
      this.selectedTag = tagService.getSelectedTag();
      this.postFilter.tagId = this.selectedTag.id;
      this.postService.getPostPaged(1, new Date(), Direction.NEXT, this.postFilter).subscribe(data => {
        this.posts = data.posts;
        this.isFirstPage = data.isFirstPage;
        this.isLastPage = data.isLastPage;
      });
    });
  }

  ngOnInit(): void {
  }

  onClickNext(): void {
    const lastPost = this.posts[this.posts.length - 1];
    this.setPostData(this.getPostData(lastPost.id, lastPost.createdDate, Direction.NEXT));
  }

  onClickPrevious(): void {
    const firstPost = this.posts[0];
    this.setPostData(this.getPostData(firstPost.id, firstPost.createdDate, Direction.PREVIOUS));
  }

  getPostData(id: number, date: Date, direction: Direction): Observable<PostPaged> {
    return this.postService.getPostPaged(id, date, direction, this.postFilter);
  }

  setPostData(postPaged: Observable<PostPaged>): void {
    postPaged.subscribe(data => {
      this.isFirstPage = data.isFirstPage;
      this.isLastPage = data.isLastPage;
      this.posts = data.posts;
    });
  }

}
