<script>
    let value = '';
    let heights = [];
    function handleSubmit(){
        heights = heights.concat(value)
        value = "";
    }
</script>

<main>
    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" bind:value />
    </form>
    <slot valueProps={heights}></slot>
</main>