<script>
	import Slotform from './Slotform.svelte';
	import Container from './Container.svelte';
    import Height from './Height.svelte';

    import { navigate } from 'svelte-routing';
    import { user } from "./stores/store";
    

    if(!$user){
        navigate('/');
    }

</script>

<h1>Composición con Slot</h1>

<!--<Container>
    <span slot="header">Este es el header</span>
    <span slot="body">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, pariatur!
    </span>
</Container>

<Container>
    <span slot="body">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, pariatur!
    </span>
</Container>-->

<Slotform let:valueProps>
    {#each valueProps as value}
        <Height {value} />
    {:else}
        <p>Introduce numero</p>
    {/each}
</Slotform>




