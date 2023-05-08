import { TagDisplay } from './../../../model/TagDisplay';
import { TagService } from './../../../services/tag.service';
import { CategoryDisplay } from './../../../model/CategoryDisplay';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: CategoryDisplay[] = [];
  tags: TagDisplay[] = [];

  constructor(private categoryService: CategoryService, private tagService: TagService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getAllDisplayCategoryWithSubCategories().subscribe(data => {
      this.categories = data;
    });
    this.tagService.getAllDisplayTags().subscribe(data => {
      this.tags = data;
    });
    this.router.navigate(['home']);
  }

}
