import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses ;

  loadCourses() {
    this.courses = [
      { id: 1, name: "Course 1"},
      { id: 2, name: "Course 2"},
      { id: 3, name: "Course 3"}
    ];
  }

  trackCourse(index, course) {
    course ? course.id : undefined;
  }
}
