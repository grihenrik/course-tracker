import { Component, OnInit } from '@angular/core';
import { CourseItem, AssignmentItem } from '../templates/template';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: CourseItem[];

  constructor(protected dataService: DataService) {}

  ngOnInit() {
    this.courses = this.dataService.getCourses();
    console.log(`CoursesComponent: ${JSON.stringify(this.courses)}`);
  }

  onSelect(id: number) {
    console.log(`Course id: ${id} clicked`);
  }
}
