<script>
	import Datos from "./Datos.svelte";
	export let name;
	let lenguaje = 'Pronto estaremos con ustedes';
	let examplearray = {
		nombre:`Fredys`,
		apellido:`Fernandez`
	}

</script>

<main>
	<h1>Modo desarrollo {name}!</h1>
	<Datos  lenguaje={lenguaje} nombre={examplearray.nombre} apellido={examplearray.apellido} />
	<!-- 	<Datos  {...examplearray} />-->
	
</main>

<style>
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