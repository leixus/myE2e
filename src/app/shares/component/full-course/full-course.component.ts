import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-full-course',
  templateUrl: './full-course.component.html',
  styleUrls: ['./full-course.component.css']
})
export class FullCourseComponent implements OnInit {

  @Input() public coursesImg: any;

  constructor() { }

  ngOnInit() {
  }

}
