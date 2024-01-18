import { Component } from '@angular/core';
import { DataCenter } from 'src/app/models/data-center';
import { VirtualMachine } from 'src/app/models/virtual-machine';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  currentComponent = 'datacenter';
  datacenters: DataCenter[] = [];
  virtualMachines: VirtualMachine[] = [];

  receiveCurrentComponent(currComponent: string) {
    this.currentComponent = currComponent; // Data from child
  }

  receiveDataCenters(datacenters: DataCenter[]) {
    this.datacenters = datacenters; // Data from child
  }

  receiveVirtualMachines(virtualMachines: VirtualMachine[]) {
    this.virtualMachines = virtualMachines; // Data from child
  }
}
