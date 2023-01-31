import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModule } from './data/data.module';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { HttpClientModule } from '@angular/common/http';
import { UploadFileService } from './upload-file.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModule,
    NgxCsvParserModule,
    HttpClientModule,
  ],
  providers: [UploadFileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
