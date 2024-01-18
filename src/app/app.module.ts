import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DatacenterFormComponent } from './components/datacenter-form/datacenter-form.component';
import { VmFormComponent } from './components/vm-form/vm-form.component';
import { HostFormComponent } from './components/host-form/host-form.component';
import { PreviewFormComponent } from './components/preview-form/preview-form.component';
import { CloudletFormComponent } from './components/cloudlet-form/cloudlet-form.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    HomeComponent,
    DatacenterFormComponent,
    VmFormComponent,
    HostFormComponent,
    PreviewFormComponent,
    CloudletFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
