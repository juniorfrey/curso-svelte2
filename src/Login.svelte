<script>
    import { user, setStorageUser } from "./stores/store";
    import { navigate } from 'svelte-routing';

    /*if(user){
        navigate('/')
    }*/

    let txtuser = "";
    let txtpass = "";

    function login(){

        setTimeout(() => {
            let userRegistrado = {
                username:txtuser,
                token:1234
            }
            user.loginUser(userRegistrado);
            setStorageUser(userRegistrado)
            navigate('/about')
        }, 1000);
        
    }
</script>

<main>
    <input type="text" bind:value={txtuser}>
    <input type="password" bind:value={txtpass}>
    <button type="button" on:click={login}>Ingresar</button>
</main>