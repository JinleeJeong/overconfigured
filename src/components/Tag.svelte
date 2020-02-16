<script>
  export let name;
  export let color;

</script>

<style>
  span {
    margin-right: 7px;
  }

  .red {
    background-color: #fc2929;
    color: #000;
    font-weight: bold;
  }

  .pupple {
    background-color: #a164d1;
    color: #000;
    font-weight: bold;
  }

  .green {
    background-color: #5ddd83;
    color: #000;
    font-weight: bold;
  }

  .yellow {
    background-color: #fc2929;
    color: #000;
    font-weight: bold;
  }

  .orange {
    background-color: #ffa033;
    color: #000;
    font-weight: bold;
  }
</style>



<span class="tag is-normal {color}">{name}</span>
