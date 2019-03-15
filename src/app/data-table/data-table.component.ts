import { Component, OnInit, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private rowData;
  private defaultColDef;

  public selectColor: string;
  public selectYear: string;
  public selectCountry: string;

  @ViewChild('agGrid') private agGrid:ElementRef;

  private datasUrl = 'api/datatable';  // URL to web api

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.columnDefs = [
      {
        headerName: "ID",
        valueGetter: "node.rowIndex + 1",
        width: 70
      },
      {
        field: "model",
        width: 150
      },
      { field: "color" },
      {
        field: "price",
        valueFormatter: '"$" + value.toLocaleString()'
      },
      { field: "year" },
      { field: "country" }
    ];
    // this.defaultColDef = { width: 100 };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.gridApi.setHeaderHeight(50);
    /**让table表格每一列自适应*/
    // this.gridApi.sizeColumnsToFit();

    this.http.get(this.datasUrl)
      .subscribe( data => {
        this.rowData = data;
        setTimeout(()=>{
          this.gridApi.sizeColumnsToFit();
        }, 10);
      });
  }
}