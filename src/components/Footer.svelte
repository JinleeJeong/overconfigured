<style>
    a {
        text-decoration: none;
        margin-right: 0.7rem;
    }
    a > i {
        margin-right: 0.5rem;
    }
    .hidden {
        display: none;
    }
</style>

<slot>    
    <div class="buttons are-small">
    <a class="button is-dark" href="https://github.com/seongjumoon" target="_blank">
        <i class="fab fa-github"></i> Github
    </a>
    <a class="button is-info" href="https://www.facebook.com/profile.php?id=100004298821299" target="_blank">
            <i class="fab fa-facebook"></i> facebook
    </a>
    </div>

    <a href="/sitemap">Sitemap</a>
    <a href="/rss">RSS </a>
    <a href="robots.txt" class="hidden">모루게소요 킹치만 이렇게 하지 않으면 못쓰는걸요?</a>
</slot>