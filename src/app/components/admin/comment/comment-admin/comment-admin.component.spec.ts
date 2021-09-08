import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentAdminComponent } from './comment-admin.component';

describe('CommentAdminComponent', () => {
  let component: CommentAdminComponent;
  let fixture: ComponentFixture<CommentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
