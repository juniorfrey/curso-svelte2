<script>
	import BindHijo from './BindHijo.svelte';
    let texto = '';
    let items = ['Uno'];
    const agregarItem = () => {
        items = [...items, texto];
        texto = '';
    }
    let checked = true;
    let ancho;
    let num;
</script>

<main>
    <input type="text" bind:value={texto}>
    <button type="text" on:click={agregarItem}>Agregar</button>
    <!--<p>{texto}</p>-->
    <ul>
        {#each items as val }
            <li>{val}</li>
        {/each}
    </ul>

    <h5>Checkbox</h5>
    <input type="checkbox" bind:checked>
    {checked}

    <div bind:clientWidth={ancho}>
        el ancho de este div {ancho}
    </div>

    <BindHijo bind:numero={num}/>
    <p>{num}</p>

</main>

<style>
    div{
        border:1px solid red;
    }
</style>