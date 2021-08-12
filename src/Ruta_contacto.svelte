<script>
	import { numero, hora } from './stores/store.js';
    
    export let id;
    let valor_numero;
    numero.subscribe((value) => {
        valor_numero = value
    });

    function reset(){
        numero.set(0);
    }
</script>

<h2>Contacto</h2>
<p>{valor_numero}</p>
<p>{$hora}</p>
<button on:click={reset}>Reset</button>

{#if id}
    <p>Usuario: {id}</p>
{/if}