import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataCenter } from 'src/app/models/data-center';
import { Host } from 'src/app/models/host';
import { SimulationService } from 'src/app/services/simulation.service';

@Component({
  selector: 'app-datacenter-form',
  templateUrl: './datacenter-form.component.html',
  styleUrls: ['./datacenter-form.component.css']
})
export class DatacenterFormComponent {
  datacenters: DataCenter[] = [];

  hosts: Host[] = [];

  DataCenter: DataCenter = {
    vmm: '',
    arch: '',
    os: '',
    hosts: []
  }

  constructor(private simulationService: SimulationService, private router: Router) { }

  ngOnInit() {
    let local_datacenters = localStorage.getItem("datacenters");
    if (local_datacenters) this.datacenters = JSON.parse(local_datacenters);
  }

  next() {
    this.handleDatacenter(this.datacenters);
  }

  handleDatacenter(data: DataCenter[]) {
    let formatedData = { "datacenters": data }
    this.simulationService.handleDatacenter(formatedData).subscribe((responce) => {
      console.log(responce);
      this.router.navigate(['/vm-form']);
    });
  }

  receiveHosts(hosts: Host[]) {
    this.hosts = hosts; // Data from child
  }

  addDataCenter() {
    this.DataCenter.hosts = this.hosts;
    this.hosts = [];
    this.datacenters.push(this.DataCenter);
    this.resetItem();
    console.log(this.datacenters)
    localStorage.setItem('datacenters', JSON.stringify(this.datacenters));
  }

  resetItem() {
    this.DataCenter = {
      vmm: '',
      arch: '',
      os: '',
      hosts: []
    };
  }

  newSimulation() {
    localStorage.removeItem("datacenters");
    localStorage.removeItem("virtual-machines");

    window.location.reload();
  }
}
