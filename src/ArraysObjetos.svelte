<script>
    //https://jsonplaceholder.typicode.com/posts
    let numero = [1,2,3,4];
    
    function agregarNumero () {
       numero = [...numero, numero.length + 1];
    }

    $: suma = numero.reduce((a,b) => a + b, 0);

    let numeroObjeto = [];

    setTimeout(() => {
        numeroObjeto = [{
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
        }]
    }, 1500);

    let promesa = getPost();
    async function getPost() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(response.status === 200){
            const resultado = await response.json();
            console.log(resultado);
            return resultado;
        }else{
            throw new Error('Hubo un error en el request') ;
        }
    }

</script>

<main>
    <p>
        {numero.join(` + `)} = {suma}
    </p>
    <button type="button" on:click={agregarNumero}>
        Añadir numero
    </button>

    <!-- Bloques if y each -->
    <!--{#if numeroObjeto.length > 0}
        <pre>{JSON.stringify(numeroObjeto, null, 2)}</pre>
    {:else}
        <p>Cargando .......</p>
    {/if}-->

    <!--{#each numeroObjeto as item, i}
        <p>#{i + 1} - {item.cantidad}</p>
    {:else}
        <p>Cargando .......</p>
    {/each}-->

    <!--{#await promesa}
        <p>... cargando</p>
    {:then value}
        {#each value as item }
            <h1>{item.title}</h1>
            <p>{item.body
            
            }</p>
        {/each}
    {:catch error}
        <p>Error: {error.message}</p>
    {/await}-->

</main>