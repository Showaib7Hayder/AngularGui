import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  // { path: '', component: StatsComponent },
  // { path: 'data', component: CsvUploadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataRoutingModule {}
