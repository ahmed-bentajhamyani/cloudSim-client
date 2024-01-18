import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cloudlet } from 'src/app/models/cloudlet';
import { DataCenter } from 'src/app/models/data-center';
import { VirtualMachine } from 'src/app/models/virtual-machine';
import { SimulationService } from 'src/app/services/simulation.service';

@Component({
  selector: 'app-vm-form',
  templateUrl: './vm-form.component.html',
  styleUrls: ['./vm-form.component.css']
})
export class VmFormComponent {
  datacenters: DataCenter[] = [];
  virtualmachines: VirtualMachine[] = [];
  result: any;

  cloudlets: Cloudlet[] = [];

  VirtualMachine: VirtualMachine = {
    mips: 0,
    size: 0,
    ram: 0,
    bw: 0,
    pesNumber: 0,
    vmm: '',
    cloudlets: []
  }

  constructor(private simulationService: SimulationService, private router: Router) { }

  ngOnInit() {
    let local_datacenters = localStorage.getItem("datacenters");
    if (local_datacenters) this.datacenters = JSON.parse(local_datacenters);

    let local_virtualmachines = localStorage.getItem("virtual-machines");
    if (local_virtualmachines) this.virtualmachines = JSON.parse(local_virtualmachines);
  }

  receiveCloudlets(cloudlets: Cloudlet[]) {
    this.cloudlets = cloudlets; // Data from child
  }

  addVM() {
    this.VirtualMachine.cloudlets = this.cloudlets;
    this.cloudlets = [];
    this.virtualmachines.push(this.VirtualMachine);
    this.resetItem();
    localStorage.setItem('virtual-machines', JSON.stringify(this.virtualmachines));
  }

  resetItem() {
    this.VirtualMachine = {
      mips: 0,
      size: 0,
      ram: 0,
      bw: 0,
      pesNumber: 0,
      vmm: '',
      cloudlets: []
    };
  }

  handleVM(data: VirtualMachine[]) {
    let formatedData = { "vms": data }
    this.simulationService.handleVM(formatedData).subscribe((responce) => {
      console.log(responce);
      this.result = responce;
      console.log(this.result);
      localStorage.setItem('result', JSON.stringify(this.result));
      this.router.navigate(['/preview']);
    });
  }

  next() {
    this.handleVM(this.virtualmachines);
  }

  newSimulation() {
    localStorage.removeItem("datacenters");
    localStorage.removeItem("virtual-machines");

    this.router.navigate(['/datacenters-form']);
  }
}
