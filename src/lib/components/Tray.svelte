<script>
  import { fly } from "svelte/transition";
  import { apps } from "$lib/store";
  import TrayItem from "./TrayItem.svelte";
</script>

<div class="container">
  <div class="tray1 flex" in:fly={{ y: 45, delay: 310 }}>
    {#each $apps as app}
      <TrayItem {app} />
    {/each}
  </div>
  <div class="tray2">
    <img class="tray" src="/src/icons/Tray.svg" alt="Tray">
  </div>
</div>

<style>
  div.container {
    position: relative;
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
  div.tray2 {
    position: relative;
    width: 1310px;
    margin: 10px 0 -10px 10px;
    bottom: 0;
		z-index: 99;
  }
  div.tray1 {
    position: fixed;
    gap: 1rem;
    padding: 0.7rem 1rem;
    overflow: auto;
    z-index: 1;
  }
  div.tray2 {
    position: absolute;
    width: 1310px;
    z-index: 0; 
    bottom: 0;
  }
  @media (max-width: 540px) {
    div.tray1 {
      bottom: 0;
      width: 100vw;
    }
  }
  @media (min-width: 540px) {
    div.tray1 {
      bottom: 1rem;
      left: 50%;
      transform: translate(-50%);
      border-radius: 0.3rem;
    }
  }
</style>
