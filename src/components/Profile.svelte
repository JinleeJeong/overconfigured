<script>
    export let name;
    export let description;
    export let mainAppear;
</script>

<style>
    img {
      display: block; 
      margin: 0px auto; 
      border-radius: 100%;
      width: 150px;
      height: 150px;
      clip: auto;
    }

    @media (min-width: 480px) {
      img {
        border-radius: 100%;
        width: 88px;
        height: 85px;
        clip: auto;
      } 
    }

    .descriptrion {
      font-size: 13pt;
    }

    .name {
      color: #a164d1;
    }
</style>

<slot>
<div class="columns is-multiline is-mobile">
  <div class="column is-one-quarter">
    <img src="img/profile_seong.jpg" alt=""/>
  </div>
  <div class="column">
     <h3 class="title is-4">
      {#if mainAppear}
        Personal blog of <span class="name">{name}</span>
      {:else}
        <span class="name">{name}</span>
      {/if}
      </h3>
      <h5 class="subtitle is-4 descriptrion">
        {description}
      </h5>
  </div>
</slot>