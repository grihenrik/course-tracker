import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CourseItem, AssignmentItem } from '../templates/template';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseId: number;
  courseItem: CourseItem;
  assignments: AssignmentItem[];

  constructor(protected dataService: DataService, protected route: ActivatedRoute) {
    this.courseId = Number(route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.courseItem = this.dataService.getCourse(this.courseId);
    this.assignments = this.dataService.getCourseAssignments(this.courseId);
  }
}
