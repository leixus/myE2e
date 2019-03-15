import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swiper from 'swiper';

// declare let Swiper: any;

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit, OnDestroy {

  public allCoursesImg: any;
  public authorCoursesImg: any;
  public effect: string;
  
  private allcoursesimgUrl = 'api/allcoursesimg';  // URL to web api
  private authorcoursesUrl = 'api/authorcourses';  // URL to web api
  private testSwiper: Swiper;

  constructor(private http: HttpClient, private elementRef: ElementRef) { }

  ngOnInit() {
    this.getImgNzVertical();
  }


  ngOnDestroy () {
    this.getImgNzVertical();
    this.testSwiper;
  }

  getImgNzVertical () {
    this.http.get(this.allcoursesimgUrl)
      .subscribe( data => {
        this.allCoursesImg = data;
      });

    this.http.get(this.authorcoursesUrl)
      .subscribe( data => {
        this.authorCoursesImg = data;
      });
  }

  search(term: string) {
    // this.pokemonService.search(term);
  }

  checkChange(e: boolean): void {
    console.log(e);
  }

}
