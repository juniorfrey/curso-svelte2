<script>
    import { onDestroy } from 'svelte';

	import { numero } from './stores/store.js';
 

    /*let valor_numero;
    const unsubscribe = numero.subscribe((value) => {
        valor_numero = value
    });*/

    function incrementar(){
        numero.update((n) => n + 1)
    }

   // onDestroy(unsubscribe);

</script>
<h2>Home</h2>
<p>{$numero}</p>

<button on:click={incrementar}>Sumar</button>