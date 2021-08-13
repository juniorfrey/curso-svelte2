<script>
    import { navigate } from 'svelte-routing';
    import { user } from './stores/store';
    $: console.log("user in home", $user);

    function logout(){
        user.logoutUser();
        navigate('/')
        localStorage.clear()
    }

    if(!$user){
        navigate('/');
    }

</script>
<button type="button" on:click={logout}>Logout</button>