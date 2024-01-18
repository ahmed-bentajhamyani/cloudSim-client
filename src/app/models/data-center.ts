import { Host } from "./host";

export interface DataCenter {
    id?: string;
    vmm: String; // VMM name
    arch: String; // Architecture
    os: String; // Operating System
    hosts: Host[];
}