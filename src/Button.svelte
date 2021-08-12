<script>
    //export let disabled = false;
    export let HandleClick = 'p';
    export let nameButton = 'Ejemplo de boton';
    export let type = 'button';
    export let texto = 'Pasando propiedades a para un elemento html';
</script>

<style>

</style>

<main>
    <h1>{texto}</h1>
    <!--<button type="button" disabled={disabled}>Disabled</button>-->
    <button type={type} on:click={HandleClick}>{nameButton}</button>
</main>