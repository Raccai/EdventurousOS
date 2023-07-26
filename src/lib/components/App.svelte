<script>
  export let backgroundColor = "#F9F4E8";
  export let color = "#050606";
  export let height = "30rem";
  export let width = "25rem";
  export let inset = "25%";

  import { scale, fade } from "svelte/transition";
  import { draggable } from "@neodrag/svelte";
</script>

<div
  in:scale
  out:fade={{ duration: 400 }}
  use:draggable={{ handle: ".titlebar" }}
  style:background-color={backgroundColor}
  style:color
  style:height
  style="--lg-width: {width}"
  style:inset
  id="parent"
>
  <slot />
</div>

<style>
  div#parent {
    resize: both;
    position: absolute;
    box-shadow: 10px 10px 0rem var(--color-text);
    border-radius: 0.3rem !important;
    overflow-y: auto;
    outline: 3px solid var(--color-text);
    border-radius: 0.5rem;
    z-index: 99;
    overflow-x: hidden;
  }
  @media (max-width: 540px) {
    div#parent {
      width: 100%;
    }
  }
  @media (min-width: 540px) {
    div#parent {
      width: var(--lg-width);
    }
  }
</style>
