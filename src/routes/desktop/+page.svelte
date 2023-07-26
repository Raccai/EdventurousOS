<script>
  import { openedApps } from "$lib/store.js";
  import Tray from "$lib/components/Tray.svelte";
  import Sticky from "../apps/Sticky.svelte";
  import { scale } from "svelte/transition";
  import { onMount } from 'svelte';

  onMount(async () => {
    $openedApps = [...$openedApps, { id: "Sticky", app: Sticky }];
  });
</script>

<div transition:scale>
  {#each $openedApps as openedApp}
    <svelte:component this={openedApp.app} />
  {/each}
  <Tray />
</div>

<style>
  div {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }

</style>
