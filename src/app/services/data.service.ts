import { Injectable } from '@angular/core';
import { BaseCommService } from './base-comm.service';
import { HttpClient } from '@angular/common/http';
import { CourseItem, AssignmentItem } from '../templates/template';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseCommService {
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
}

const courseItems: CourseItem[] = [
  {
    course_id: 0,
    name: 'Browser As a Platform',
    start_date: '2019-01-01',
    end_date: '2019-03-18'
  },
  {
    course_id: 1,
    name: 'Server Side Programming',
    start_date: '2019-01-01',
    end_date: '2019-03-18'
  },
  {
    course_id: 2,
    name: 'Web Frameworks',
    start_date: '2019-03-20',
    end_date: '2019-04-30'
  }
];
