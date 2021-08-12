<script>
    let numero = [1,2,3,4];
    
    function agregarNumero () {
       numero = [...numero, numero.length + 1];
    }

    $: suma = numero.reduce((a,b) => a + b, 0)

</script>

<main>
    <p>
        {numero.join(` + `)} = {suma}
    </p>
    <button type="button" on:click={agregarNumero}>
        Añadir numero
    </button>
</main>