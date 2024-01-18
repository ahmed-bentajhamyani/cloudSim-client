import { Cloudlet } from "./cloudlet";

export interface VirtualMachine {
    id?: string;
    mips: number; // mille instruction par seconde 
    size: number; // image size (MB)
    ram: number; // vm memory (MB)
    bw: number; // bande passante
    pesNumber: number; // number of cpus
    vmm: String; // VMM name
    cloudlets: Cloudlet[];
}