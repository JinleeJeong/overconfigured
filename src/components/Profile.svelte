<script>
    export let name;
    export let description;
    export let mainAppear;
</script>

<style>
    .avatar {
      margin-right: 0.875rem;
      margin-bottom: 0;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
    }

    .profile {
      display: flex;
    }

    .descriptrion {
      font-size: 13pt;
    }

    .name {
      color: #a164d1;
    }
    .wrapper {
      max-width: 350px;;
    }

    aside {
      margin-bottom: 1.3rem;
    }
</style>

<aside>
  <div class="profile">
    <img src="img/profile_seong.jpg" class="avatar" alt="hello"/>
    <div class="wrapper">
      {#if mainAppear}
        <p>Personal blog by <span class="name">{name}</span></p>
      {:else}
        <p><span class="name">{name}</span> &nbsp; {description}</p>
      {/if}      
      <p class="descriptrion">{description}</p>        
    </div>
  </div>
</aside>