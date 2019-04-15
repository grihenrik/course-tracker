import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseItem, AssignmentItem } from '../templates/template';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: CourseItem[];

  constructor(protected dataService: DataService, protected router: Router) {}

  ngOnInit() {
    this.courses = this.dataService.getCourses();
    console.log(`CoursesComponent: ${JSON.stringify(this.courses)}`);
  }

  onSelect(id: number) {
    console.log(`Course id: ${id} clicked`);
    this.router.navigate([`/course/${id}`]);
  }
}
