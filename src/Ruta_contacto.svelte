<script>
	import { navigate } from 'svelte-routing';
    import { user } from "./stores/store";
    

    if(!$user){
        navigate('/');
    }

</script>
<main>
    <h1>Contacto</h1>
</main>