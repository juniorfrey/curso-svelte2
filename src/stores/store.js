import { writable,derived } from "svelte/store";

/*function createNumber(){
    const {subscribe, update, set } = writable([1]);

    return {
        subscribe,
        addNumber : () => update(n => {
            n.push(n.length + 1)
            return n;
        }),
        //resetear:() => set([1])
    }
}*/


function userStore(){
    const {subscribe,  set } = writable(getStorageUser());

    return {
        subscribe,
        loginUser: (arg) => set(arg),
        logoutUser : () => set(null)
    }
}

export const user = userStore();

export function setStorageUser(user){
    localStorage.setItem('user', JSON.stringify(user));
}

function getStorageUser(){
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('')) : null
}

//export const numero = createNumber();

/*export const valorTotal = derived(numero,$numero => {
    let total = $numero.reduce((a,b) => a + b);
    return total;
})*/

/*export const hora = readable(null,set => {
    set(new Date());

    const intervalo = setInterval(() => {
        set(new Date());
    }, 1000);

    return() => clearInterval(intervalo)
    
})*/