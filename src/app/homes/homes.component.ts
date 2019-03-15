import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let Highcharts = require('highcharts');
// 在 Highcharts 加载之后加载功能模块
require('highcharts/modules/exporting')(Highcharts);

import { GridOptions } from "ag-grid-community";

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit, OnDestroy {

  public carouselsArray: any;
  public effect: string;
  public gridOptions: GridOptions;
  private gridApi;
  private gridColumnApi;
  public columnDefs: Array<any>;
  public rowData: any;
  private rowSelection;
  
  private carouselsUrl = 'api/carousel';  // URL to web api
  private heroesUrl = 'api/hometable';  // URL to web api

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getCarousels();

    setTimeout(()=>{
      this.getCharts();
    }, 10);

    this.columnDefs = [
      {
        headerName: '姓名', 
        field: 'athlete', 
        sortable: true, 
        filter: true, 
        checkboxSelection: function(params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        },
        headerCheckboxSelection: function(params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        }
      },
      {headerName: '年龄', field: 'age', sortable: true, filter: true},
      {headerName: '国家', field: 'country', sortable: true, filter: true},
      {headerName: '年度', field: 'year', sortable: true, filter: true},
      {headerName: '日期', field: 'date', sortable: true, filter: true},
      {headerName: '运动', field: 'sport', sortable: true, filter: true},
      {headerName: '金牌', field: 'gold', sortable: true, filter: true},
      {headerName: '银牌', field: 'silver', sortable: true, filter: true},
      {headerName: '铜牌', field: 'bronze', sortable: true, filter: true},
      {headerName: '总数', field: 'total', sortable: true, filter: true},
    ];
    this.rowSelection = 'multiple';
  }

  onGridReady(params) {
    this.gridApi = params.api;
    // this.gridColumnApi = params.columnApi;
    // this.gridApi.setHeaderHeight(50);
    /**让table表格每一列自适应*/
    // this.gridApi.sizeColumnsToFit();

    this.http.get(this.heroesUrl)
      .subscribe( data => {
        this.rowData = data;
        setTimeout(()=>{
          this.gridApi.paginationGoToPage(2);
        }, 10);   
      });
  }

  getCarousels () {
    this.http.get(this.carouselsUrl)
    .subscribe( data => {
      this.carouselsArray = data;
      this.effect = 'scrollx';
      // setTimeout(()=>{
      //   this.gridApi.paginationGoToPage(2);
      // }, 10);   
    });
  }

  ngOnDestroy () {
    this.getCarousels();
  }

  getCharts() {
    // 怀疑是异步加载......
    // 创建图表
    Highcharts.chart('high_container', {
      chart: {
        type: 'spline'
      },
      title: {
        text: '北京-南京两地月平均温度'
      },
      subtitle: {
        text: '数据来源: www.leixu.com'
      },
      xAxis: {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月',
               '七月', '八月', '九月', '十月', '十一月', '十二月']
      },
      yAxis: {
        title: {
          text: '温度'
        },
        labels: {
          formatter: function () {
            return this.value + '°';
          }
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      series: [{
        name: '北京',
        marker: {
          symbol: 'square'
        },
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
          y: 26.5,
        }, 23.3, 18.3, 13.9, 9.6]
      }, {
        name: '南京',
        marker: {
          symbol: 'diamond'
        },
        data: [{
          y: 3.9,
        }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }]
    });
  }
}
