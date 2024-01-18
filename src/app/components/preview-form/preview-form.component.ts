import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataCenter } from 'src/app/models/data-center';
import { VirtualMachine } from 'src/app/models/virtual-machine';

@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrls: ['./preview-form.component.css']
})
export class PreviewFormComponent {
  datacenters: DataCenter[] = [];
  virtualmachines: VirtualMachine[] = [];
  result: any;

  constructor(private router: Router) { }

  ngOnInit() {
    let local_datacenters = localStorage.getItem("datacenters");
    if (local_datacenters) this.datacenters = JSON.parse(local_datacenters);

    let local_virtualmachines = localStorage.getItem("virtual-machines");
    if (local_virtualmachines) this.virtualmachines = JSON.parse(local_virtualmachines);

    let result = localStorage.getItem("result");
    if (result) {this.result = JSON.parse(result);
    console.log(this.result)
  }}

  dataCentersForm() { }

  virtualMachinesForm() { }

  newSimulation() {
    localStorage.removeItem("datacenters");
    localStorage.removeItem("virtual-machines");

    this.router.navigate(['/datacenters-form']);
  }
}
