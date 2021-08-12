<script>
    let numero = [1,2,3,4];
    const agregarNumero = () => {
       let arrayNuevo = [...numero, 5];
    }

</script>

<main>
    <p>
        {numero.join(` + `)}
    </p>
    <button on:click={agregarNumero}>
        Añadir numero
    </button>
</main>