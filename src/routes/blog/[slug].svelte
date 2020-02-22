<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { article: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Tag from '../../components/Tag.svelte';
	import Profile from '../../components/Profile.svelte';
	import SearchEngine from '../../components/SearchEngine.svelte';
	export let article;
</script>

<style>
	div {
		margin-bottom: 2.25rem;	
	}

	 .info {
        font: 100%/1.75 'Merriweather','Georgia',serif
    }
</style>

<SearchEngine article={article}/>
<svelte:head>
	<title>{article.title}</title>
</svelte:head>


<div>
	<p>{article.title}</p>
	<p class="info">
		{article.formattedDate}
		{article.formattedReadingTimes}
	</p>
	
	<div class="category">
		{#if article.tags}
			{#each article.tags as tag}
				<Tag name={tag.name} color={tag.color}/>
			{/each}
		{/if}
	</div>
</div>

<article class='content'>
	{@html article.htmlContent}
</article>

<Profile name="SeongJu Moon"
		description="I hope my short knowledge will help others."
		mainAppear=""/>

