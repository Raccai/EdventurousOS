<script>
    import { openedApps } from "../store";

    export let title;

    const closeApp = () => {
        $openedApps = $openedApps.filter((item) => item.id !== title);
    };
</script>

<div class="titlebar flex">
    <button on:click={closeApp}>X</button>
    <span class="title">{title}</span>
</div>

<style>
    span.title {
        margin-top: 2.5px;
    }
    div.titlebar {
        position: absolute;
        top: 0.4rem;
        width: 100%;
        cursor: grab;
        gap: 0.5rem;
        padding-left: 0.5rem;
    }
    button {
        all: unset;
        cursor: pointer;
        transition: 0.5s;
        margin-top: 3px;
        font-weight: 600;
    }
    button:hover {
        color: var(--color-accent1);
    }
</style>
