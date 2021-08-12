<script>
    import Button from "./Button.svelte";
    export let nameButton, type;
    let  texto = `Variables reactivas`;
    let numero = 1;

    const HandleClick = () => {
        numero++;
        numero = numeroDoble;
    }

    $:numeroDoble = numero * 2
    


</script>

<main>

    <Button {nameButton} {type} {HandleClick} {texto}/>
    <p>Resultado de 2 * {numero} = {numeroDoble}</p>
</main>