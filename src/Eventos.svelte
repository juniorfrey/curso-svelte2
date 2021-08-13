<script>
    import Intermedio from "./Intermedio.svelte";

    let numero = 0;

    const addNum = () => {
        numero++;
    }

    const Evento = (event) => {
        console.log('Evento : ',event.detail);
    }

    const Evento_dos = () => {
        console.log('Eventos 2');
    }

    const submit = () => {
       // e.preventDefault();
        console.log('subnit');
    }
</script>

<main>
    <button type="button" on:click|once={addNum} on:click={Evento}>{numero}</button>

    <form on:submit|preventDefault={submit}>
        <input type="text">
        <button type="submit">Submit</button>
    </form>
    <hr>
    <Intermedio on:EventoPrimero={Evento} on:EventoSegundo={Evento_dos} />
</main>