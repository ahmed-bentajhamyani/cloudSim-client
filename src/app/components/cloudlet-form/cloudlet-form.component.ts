import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cloudlet } from 'src/app/models/cloudlet';

@Component({
  selector: 'app-cloudlet-form',
  templateUrl: './cloudlet-form.component.html',
  styleUrls: ['./cloudlet-form.component.css']
})
export class CloudletFormComponent {
  @Input() cloudlets: Cloudlet[] = [];

  Cloudlet: Cloudlet = {
    length: 0,
    pesNumber: 0,
    fileSize: 0,
    outputSize: 0
  }

  mips: number = 0;
  mipsList: number[] = [];

  @Output() dataEvent = new EventEmitter<Cloudlet[]>();

  sendData(data: Cloudlet[]) {
    this.dataEvent.emit(data);
  }

  addCloudlet() {
    this.cloudlets.push(this.Cloudlet);
    this.resetItem();
    this.sendData(this.cloudlets);
  }

  resetItem() {
    this.Cloudlet = {
      length: 0,
      pesNumber: 0,
      fileSize: 0,
      outputSize: 0
    };
  }
}
