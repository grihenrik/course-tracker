import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseComponent } from './course/course.component';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [AppComponent, CoursesComponent, PageNotFoundComponent, CourseComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
