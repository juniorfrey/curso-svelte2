<script>
	import Datos from "./Datos.svelte";
	import Button from "./Button.svelte";
	import Inputs from "./Inputs.svelte";
	import Reactividad from "./Reactividad.svelte";
	import ClaseComponente from "./Datos.svelte";
	import ArraysObjetos from "./ArraysObjetos.svelte";
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

</script>



<main>
	<h1>Modo desarrollo {name}!</h1>
	<Datos  lenguaje={lenguaje} nombre={examplearray.nombre} apellido={examplearray.apellido} />
	<!-- 	<Datos  {...examplearray} />-->

	<!-- Botones -->
	<Button {disabled} {HandleClick} />

	<!-- Inputs -->
	<Inputs {...propertyInput}/>
	<!--{console.log(propertyInput)}-->
	<!--{@debug propertyInput}-->

	<h2>Reactividad</h2>
	<Reactividad {...PropertyButton} {...propertyInput}/>

	<h2>Array y objetos</h2>
	<ArraysObjetos />
	

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
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>