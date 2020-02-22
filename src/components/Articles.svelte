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

    a {
        color: var(--textLink) !important;
    }

    article {
        margin-bottom: 1.6rem;
    }

</style>

{#each articles as article}
    <article>
        <a class="title" rel='prefetch' href='blog/{article.slug}'>
            {article.title}
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
        <p>
            {article.description}
        </p>
    </article>
{/each}

