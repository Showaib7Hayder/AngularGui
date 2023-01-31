import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:8000/info';

  sendReqest(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

  uploadFile(formData: FormData) {
    return this.http.post(this.apiUrl, formData);
  }

  sendData(formData: FormData) {
    return this.http.post(this.apiUrl, formData);
  }
}
