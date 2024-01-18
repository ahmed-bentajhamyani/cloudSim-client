export interface Host {
    id?: string;
    mips: number[]; // mille instruction par seconde 
    storage: number; // Storage
    ram: number; // vm memory (MB)
    bw: number; // bande passante
}