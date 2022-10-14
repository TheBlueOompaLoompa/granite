import { writable } from 'svelte/store';

let h: FileSystemHandle;
export const vaultStore = writable(h);
