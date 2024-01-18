import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DatacenterFormComponent } from './components/datacenter-form/datacenter-form.component';
import { VmFormComponent } from './components/vm-form/vm-form.component';
import { PreviewFormComponent } from './components/preview-form/preview-form.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "datacenters-form", component: DatacenterFormComponent },
  { path: "vm-form", component: VmFormComponent },
  { path: "preview", component: PreviewFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
