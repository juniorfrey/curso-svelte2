<script>
	import { navigate } from 'svelte-routing';
    import { user } from "./stores/store";
    $: console.log("user in home", $user);

    if(!$user){
        navigate('/');
    }

</script>
<main>
    <h1>About</h1>
</main>