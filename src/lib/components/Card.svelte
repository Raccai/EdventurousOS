<script>
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="main-div" id="main-div" tabindex="0">
    <div class="img">
        <slot/>
    </div>
</div>

<style>
    .main-div {
        background-color: var(--color-bg);
        height: 400px;
        width: 400px;
        border-radius: 10px;
        position: relative;
        transition: all 0.2s ease;
        background: var(--color-primary2);
        font-weight: 600;
    }
</style>