import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/upload-file.service';

@Component({
  selector: 'app-sendrequest',
  templateUrl: './sendrequest.component.html',
  styleUrls: ['./sendrequest.component.css'],
})
export class SendrequestComponent implements OnInit {
  constructor(
    private sendService: UploadFileService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}
  responseTitle: string = '';
  responseBody: string = '';
  responseName: any;

  onSend(name: string) {
    const formData: FormData = new FormData();
    formData.append('name', name);

    this.sendService.sendReqest(formData).subscribe(
      (res) => {
        // this.responseTitle = res['title'];
        // this.responseBody = res['info'];
        this.responseName = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  file: any;
  name: string = '';

  uploadFile(event: any, name: string) {
    this.file = event.target.files[0];
    this.name = name;
    console.log('File', this.file);
  }

  onUpload() {
    const formData: FormData = new FormData();
    formData.append('file', this.file);

    this.sendService.uploadFile(formData).subscribe(
      (res) => {
        console.log(res);
        this.responseName = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
