<script>
	import ThemeSwitch from '../components/ThemeSwitch.svelte';
</script>

<style>
	h1 {
		margin-bottom: 1.65rem;
	}
	.head {
		font-size: 2.26rem;
		font-weight: 900;
		font-family: 'Montserrat','sans-serif';
		color: var(--header);
	}

	.container {
		margin-left: auto;
		margin-right: auto;
		max-width: 42rem;
		padding: 2.625rem 1.3125rem;
	}

	@media screen and (min-width: 320px) {
		.head {
			font-size: 1.7rem;
		}
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



