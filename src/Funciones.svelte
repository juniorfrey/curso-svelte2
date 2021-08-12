<script>
    import { getContext } from 'svelte';
    const FuncionSetContent = getContext('funcion');
    let param = 'Se se pudo';
</script>

<main>
    <button on:click={() => FuncionSetContent(param)}>SetContent</button>
</main>