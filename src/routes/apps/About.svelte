<script>
    import Titlebar from "$lib/components/Titlebar.svelte";
    import App from "$lib/components/App.svelte";

    let title = "About"

    const AppDetails = {
        height: "35rem",
        width: "50rem",
        inset: "10rem",
    };
</script>

<App {...AppDetails}>
        <Titlebar {title}/>
        <div class="content flex flex-ac flex-jc flex-dirc">
            <img class="edv-logo" src="/bg/EdventureQR.png" alt="Edventure Logo">

            <span id="title">EdventurousOS</span>
            <span style:text-align=center style:font-size=0.8rem style:color="#F9F4E8"><i>*Not a product of Edventure.ph</i></span>
            <span style:text-align=center style:font-size=0.8rem style:color="#F9F4E8">Edventure is an online tutorial platform that brings high quality, <br>
                affordable and personalized 1-on-1 tutorials for students.</span>

            <a href="https://edventure.ph/"
            target="_blank" noreferrer>
                Check them out!
            </a>
        </div>
</App>

<style>
    div.content{
        background-color: var(--color-accent2);
    }
    img.edv-logo {
        height: 200px;
    }
    #title {
        font-size: 2rem;
        font-weight: 900;
        color: var(--color-bg);
    }
    a {
        text-decoration: none;
        color: var(--color-text);
        background-color: var(--color-primary1);
        padding: 0.3rem 0.8rem;
        border-radius: 0.3rem;
    }
    a:hover {
        color: var(--color-bg);
        background-color: var(--color-primary2);
        transition: 0.2s ease;
    }
</style>