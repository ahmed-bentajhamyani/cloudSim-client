import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Host } from 'src/app/models/host';

@Component({
  selector: 'app-host-form',
  templateUrl: './host-form.component.html',
  styleUrls: ['./host-form.component.css']
})
export class HostFormComponent {
  @Input() hosts: Host[] = [];

  Host: Host = {
    mips: [],
    storage: 0,
    ram: 0,
    bw: 0
  }

  mips: number = 0;
  mipsList: number[] = [];

  @Output() dataEvent = new EventEmitter<Host[]>();

  sendData(data: Host[]) {
    this.dataEvent.emit(data);
  }

  addCore() {
    this.mipsList.push(this.mips);
    this.mips = 0;
  }

  addHost() {
    this.Host.mips = this.mipsList;
    this.mipsList = [];
    this.hosts.push(this.Host);
    this.resetItem();
    this.sendData(this.hosts);
  }

  resetItem() {
    this.Host = {
      mips: [],
      storage: 0,
      ram: 0,
      bw: 0
    };
  }
}
