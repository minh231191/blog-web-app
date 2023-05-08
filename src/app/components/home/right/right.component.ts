import { TagDisplay } from './../../../model/TagDisplay';
import { Component, Input, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  @Input()
  tags: TagDisplay[] = [];

  constructor(private tagService: TagService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateToTagPost(tag: TagDisplay): void {
    this.tagService.setSelectedTag(tag);
    this.router.navigate(['/tag', tag.name]);
  }

}
