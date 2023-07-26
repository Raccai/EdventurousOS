<script>
    import { goto } from '$app/navigation';
</script>

<div class="fullscreen dark flex flex-jc flex-ac flex-dirc">
        <img src="static/icons/EdventureLogo.svg" alt="Logo">
        <h1>Welcome, future edventurous intern.</h1>
        <h3>Yeehaw, pasok kayo pls, and learn about the what it's like to be an intern at Edventure</h3>
        <a href="/desktop">Sign In</a>
</div>

<style>
    h1 {
        margin: 10px 0;
        font-weight: 600;
    }
    h3 {
        margin: -10px 0 10px 0;
        font-weight: 300;
    }
    div {
        background: url("/static/bg/4k_2.avif");
    }
    img {
        height: 300px;
        margin: 0 0 -10px 0;
    }
    a {
        background: var(--color-primary1);
        text-decoration: none;
        color: var(--color-text);
        padding: 0.5rem 1.5rem;
        border-radius: 0.3rem;
        font-size: 1.4rem;
        font-weight: bold;
    }
    a:hover {
        background: var(--color-primary2);
        color: var(--color-bg);
    }
</style>
