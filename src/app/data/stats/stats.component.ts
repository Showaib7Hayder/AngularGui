import { Component, OnInit, Input } from '@angular/core';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  pSelected: boolean = false;
  npSelected: boolean = false;
  isActive: boolean = false;
  selectedVars: Array<string> = [];
  try: string = '';
  testClicked: boolean = false;
  testName: string = '';

  parametricTests: Array<string> = [
    'Median',
    'ANOVA',
    'Spearman',
    'Shapiro',
    'Two-sample',
    'Paired',
  ];

  nonParametricTests: Array<string> = [
    '1-sample sign',
    'Friedman',
    'Kruskal-Wallis',
    'Spearman',
  ];

  constructor(private uploadService: UploadFileService) {}
  @Input() csvRecords: any;
  ngOnInit(): void {}
  pClicked() {
    this.pSelected = !this.pSelected;
    this.npSelected = false;
  }
  npClicked() {
    this.npSelected = !this.npSelected;
    this.pSelected = false;
  }
  checkActive() {
    this.isActive = !this.isActive;
  }
  onVarClick(item: string) {
    this.selectedVars.push(item);
  }

  testClick(test: string) {
    this.testClicked = !this.testClicked;
    this.testName = test;
  }

  file: any;
  testResponse: any;
  uploadFile(event: any) {
    this.file = event.target.files[0];

    console.log('File', this.file);

    const formData: FormData = new FormData();
    formData.append('file', this.file);
    formData.append('vars', JSON.stringify(this.selectedVars));
    formData.append('test', this.testName);

    this.uploadService.uploadFile(formData).subscribe(
      (res) => {
        console.log(res);
        this.testResponse = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
