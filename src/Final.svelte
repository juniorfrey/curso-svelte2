<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let variableFinal = 'variableFinal';
</script>
<button type="button" on:click={() => dispatch('EventoPrimero', variableFinal)}>
    Final 1
</button>
<button type="button" on:click={() => dispatch('EventoSegundo')}>Final 2</button>