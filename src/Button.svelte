<script>
    export let disabled = false;
    export let HandleClick = 'p';
</script>

<style>

</style>

<main>
    <h1>Pasando propiedades a para un elemento html</h1>
    <button type="button" disabled={disabled}>Disabled</button>
    <button type="button" on:click={HandleClick}>Normal</button>
</main>