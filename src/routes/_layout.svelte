<script>
	import ThemeSwitch from '../components/ThemeSwitch.svelte';
</script>

<style>
	.head {
		font-size: 2.26rem;
		font-weight: 900;
		margin: 0 0 0.5em 0;
		font-family: 'Montserrat','sans-serif';
		color: var(--header);
	}

	.container {
		margin-left: auto;
		margin-right: auto;
		max-width: 42rem;
		padding: 2.625rem 1.3125rem;
	}
</style>

<div class="container">		
	<h1>
		<a class="head" href="/">
			Overconfigured
		</a>
	</h1>
	<p style="float: right;">
		<ThemeSwitch/>
	</p>
	<slot/>
</div>



