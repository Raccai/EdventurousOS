<script>
  export let app = "";

  import { openedApps } from "$lib/store";

  const check = (appName) => {
    for (let i = 0; i < $openedApps.length; i++) {
      if ($openedApps[i].id === appName) {
        return false;
      }
    }
  };

  const openApp = (App, Name) => {
    if ($openedApps.length === 0 || check(Name) !== false) {
      $openedApps = [...$openedApps, { id: Name, app: App }];
    } else {
      $openedApps = $openedApps.filter((App) => App.id !== Name);
    }
  };

  let bounce = false;

  function bouncefunc() {
    bounce = true;
    setTimeout(() => {
      bounce = false;
    }, 750);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if app !== ""}
  <div
    class="{bounce ? 'bounce' : ''} tray_item"
    on:click={() => {
      openApp(app.component, app.id);
      bouncefunc();
    }}
  >
    <img src={app.icon} alt="icon"/>
  </div>
{/if}

<style>
  div.tray_item {
    transition: all 0.3s;
  }
  div.tray_item:hover {
    transform: scale(1.2);
  }
  img {
    width: 75px;
  }
  :global(div.dock_item svg) {
    height: 2rem;
    width: 2rem;
    color: white;
  }
  .bounce {
    animation: anim 0.5s ease-in-out;
  }
  @keyframes anim {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1rem);
    }
  }
</style>
