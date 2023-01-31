import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';
import { StatsComponent } from './stats/stats.component';
import { TableComponent } from './table/table.component';
import { DividerComponent } from './divider/divider.component';
import { SendrequestComponent } from './sendrequest/sendrequest.component';

@NgModule({
  declarations: [
    CsvUploadComponent,
    StatsComponent,
    TableComponent,
    DividerComponent,
    SendrequestComponent,
  ],
  imports: [CommonModule, DataRoutingModule],
  exports: [CsvUploadComponent, StatsComponent],
})
export class DataModule {}
