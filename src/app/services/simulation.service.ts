import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  apiUrl = "http://localhost:8088";

  constructor(private httpClient: HttpClient) { }

  // {
  //   "datacenters": [
  //     {
  //       "arch": "arch",
  //       "os": "linux",
  //       "vmm": "xen",
  //       "hosts": [
  //         {
  //           "mips": [1200, 400],
  //           "ram": 2048,
  //           "storage": 100000,
  //           "bw": 10000
  //         }
  //       ]
  //     }
  //   ]
  // }
  handleDatacenter(data: any) {
    return this.httpClient.post(`${this.apiUrl}/datacenters`, data);
  }

  // {
  //   "vms": [
  //     {
  //       "mips": 250,
  //       "size": 10000,
  //       "ram": 512,
  //       "bw": 1000,
  //       "pesNumber": 1,
  //       "vmm": "Xen",
  //       "cloudlets": [
  //         {
  //           "length": 40000,
  //           "pesNumber": 1,
  //           "fileSize": 300,
  //           "outputSize": 300
  //         }
  //       ]
  //     }
  //   ]
  // }
  handleVM(data: any) {
    return this.httpClient.post(`${this.apiUrl}/virtual-machines`, data);
  }
}
