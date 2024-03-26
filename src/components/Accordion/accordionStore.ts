import { writable } from "svelte/store";

export const currentAccordion = writable<number | null>(null);
