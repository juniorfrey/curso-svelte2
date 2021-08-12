<script>
    let numero = [1,2,3,4];
    
    function agregarNumero () {
       numero = [...numero, numero.length + 1];
    }

    $: suma = numero.reduce((a,b) => a + b, 0);

    let numeroObjeto = [
        {
            id:1,
            cantidad:100
        },
        {
            id:2,
            cantidad:200
        },
        {
            id:3,
            cantidad:300
        }
    ]

</script>

<main>
    <p>
        {numero.join(` + `)} = {suma}
    </p>
    <button type="button" on:click={agregarNumero}>
        Añadir numero
    </button>

    <!-- Bloques if y each -->
    {#if numeroObjeto.length > 0}
        <pre>{JSON.stringify(numeroObjeto, null, 2)}</pre>
    {/if}

</main>