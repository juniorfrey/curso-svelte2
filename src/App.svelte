<script>
	import Bind from './Bind.svelte';
	import Funciones from './Funciones.svelte';
	import Datos from "./Datos.svelte";
	import Button from "./Button.svelte";
	import Inputs from "./Inputs.svelte";
	import Reactividad from "./Reactividad.svelte";
	import ClaseComponente from "./Datos.svelte";
	import ArraysObjetos from "./ArraysObjetos.svelte";
	import Eventos from "./Eventos.svelte";
	import { setContext } from 'svelte';
	import { Router, Route, Link, link } from 'svelte-routing';
	import RutaHome from './Ruta_home.svelte';
	import RutaContacto from './Ruta_contacto.svelte';
	import Login from './Login.svelte';
	import Logout from './Logout.svelte';
	import About from './About.svelte';
	import { user } from './stores/store';
	

	export let name;
	let lenguaje = 'Pronto estaremos con ustedes';
	let examplearray = {
		nombre:`Fredys`,
		apellido:`Fernandez`
	}

	let disabled = true;
	let propertyInput = {
		placeholder : `Inputs`,
		type : `text`,
		className : `form`,
		require : `required`,
		value:''
	};

	let PropertyButton = {
		nameButton:`Reactividad`,
		type:`button`
	}
	

	// Funciones
	const HandleClick = () => {
		name = 'Desarrollador';
		propertyInput.value = '1089547521'
	}

	const FunctionSetContent = (param) => {
		console.log('SetContent', param);
	}

	setContext('funcion', FunctionSetContent);

</script>





<main>
	<!--<h1>Modo desarrollo {name}!</h1>-->
	<!--<Datos  lenguaje={lenguaje} nombre={examplearray.nombre} apellido={examplearray.apellido} />-->
	<!-- 	<Datos  {...examplearray} />-->

	<!-- Botones -->
	<!--<Button {disabled} {HandleClick} />-->

	<!-- Inputs -->
	<!--<Inputs {...propertyInput}/>-->
	<!--{console.log(propertyInput)}-->
	<!--{@debug propertyInput}-->

	<!--<h2>Reactividad</h2>
	<Reactividad {...PropertyButton} {...propertyInput}/>-->

	<!--<h2>Array y objetos</h2>
	<ArraysObjetos />-->

	<!--<h1>Eventos</h1>
	<Eventos />-->

	<!--<Funciones />-->

	<!--<Bind />-->

	<Router>
		<nav>
			<Link to="/">Home</Link>
			
			{#if $user}
				<Link to="/contacto">Contacto</Link>
				<Link to="/about">About</Link>
				<Link to="/logout">logout</Link>
			{:else}
				<Link to="/login">Login</Link>
			{/if}
			
		</nav>
		<div>
			<Route path="/"  component={RutaHome}/>
			<Route path="/contacto"  component={RutaContacto}/>
			<Route path="/contacto/:id"  component={RutaContacto} let:params/>
			<Route path="/about"  component={About} />
			<Route path="/login"  component={Login} />
			<Route path="/logout"  component={Logout} />
		</div>
	</Router>

	

</main>

<style>

	:global(input){
		border-radius: 20px;
		background-color: burlywood;
		padding: 3px 10px 3px 10px;
		box-sizing: border-box;
		outline: none;
	}

	main {
		text-align: left;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>