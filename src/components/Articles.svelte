<script>
    import Tag from '../components/Tag.svelte';
    export let articles;
</script>

<style>
    .category {
        margin-right: 7px;
    }
    
    .info {
        font: 100%/1.75 'Merriweather','Georgia',serif
    }
</style>

<ul>
{#each articles as article}
    <li>
        <div class="tile">
            <div class="tile is-parent">
                <article class="tile is-child ">
                    <a rel='prefetch' href='blog/{article.slug}'>
                        <p class="title is-4 emphasize">{article.title}</p>
                    </a>
                <div class="info">
                    {article.formattedDate}
                    {article.formattedReadingTimes}
                </div>
                <div class="category">
                {#if article.tags}
                    {#each article.tags as tag}
                        <Tag name={tag.name} color={tag.color}/>
                    {/each}
                {/if}
                </div>
                <p class="subtitle is-5">
                    {article.description}
                </p>
                </article>
            </div>
        </div>
    </li>
{/each}
</ul>

