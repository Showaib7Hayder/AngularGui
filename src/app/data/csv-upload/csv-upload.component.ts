import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css'],
})
export class CsvUploadComponent implements OnInit {
  csvRecords: any;

  // In case the header config is true the result will be: array of json objects
  // In case the header config is true the result will be: array of array objects
  header: boolean = false;
  isStackedON: boolean = true;
  dataArray: any;
  constructor(private ngxCsvParser: NgxCsvParser) {}

  @ViewChild('fileImportInput') fileImportInput: any;

  fileChangeListener($event: any): void {
    const files = $event.srcElement.files;
    // this.header =
    //   (this.header as unknown as string) === 'true' || this.header === true;

    this.ngxCsvParser
      .parse(files[0], {
        header: this.header,
        delimiter: ',',
        encoding: 'utf8',
      })
      .pipe()
      .subscribe({
        next: (result): void => {
          console.log('Result', result);
          this.csvRecords = result;
        },
        error: (error: NgxCSVParserError): void => {
          console.log('Error', error);
        },
      });
    this.dataArray = this.csvRecords;
    this.isStackedON = !this.isStackedON;
  }

  ngOnInit(): void {}
}
