import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swiper from 'swiper';

@Component({
  selector: 'app-recommended-course',
  templateUrl: './recommended-course.component.html',
  styleUrls: ['./recommended-course.component.css']
})
export class RecommendedCourseComponent implements OnInit {

  public imgNzVertical: any;
  public imgRecommended: any;
  public imgRecommededNew: any;
  private coursesUrl = 'api/mycourses';  // URL to web api
  private recommendedimg = 'api/recommendedimg';  // URL to web api
  private recommededNewIng = 'api/recommededNewIng';  // URL to web api
  private testSwiper: Swiper;

  constructor(private http: HttpClient, private elementRef: ElementRef) { }

  ngOnInit() {
    this.getImgNzVertical();
    this.testSwiper = new Swiper(this.elementRef.nativeElement.querySelector('.swiper-container'), {
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,   // 修改swiper父元素时，自动初始化swiper
      loop: true, // 循环模式选项
      // slidesPerView: 'auto',
    });
  }

  getImgNzVertical () {
    this.http.get(this.coursesUrl)
      .subscribe( data => {
        this.imgNzVertical = data;
      });

    this.http.get(this.recommendedimg)
      .subscribe( data => {
        this.imgRecommended = data;
      });

    this.http.get(this.recommededNewIng)
      .subscribe( data => {
        this.imgRecommededNew = data;
      });
  }

}
