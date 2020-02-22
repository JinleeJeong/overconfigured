<script context="module">
	export async function preload(page, session) {
		const { slug } = page.params;

        const res = await this.fetch(`blog.json`);
		const articles = await res.json();

		return { articles };
	}
</script>

<script>
	export let articles;

	import Rows from '../components/Articles.svelte';
	import Profile from '../components/Profile.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>Overconfigured A personal blog by seongju moon</title>
</svelte:head>

<div>
	<Profile name="SeongJu Moon" 
			description="I hope my short knowledge will help others."
			mainAppear=true/>
	<Rows articles={articles}/>
</div>

<Footer/>

