import { writable, readable } from "svelte/store";

export const numero = writable(10);
export const hora = readable(new Date(), function start(set){
    const intervalo = setInterval(() => {
        set(new Date())
    }, 1000);

    return function stop(){
        clearInterval(intervalo);
    }
})