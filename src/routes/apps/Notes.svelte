<script>
    import Titlebar from "$lib/components/Titlebar.svelte";
    import App from "$lib/components/App.svelte";

    let title = "Notes";

    const AppDetails = {
        height: "30rem",
        width: "55rem",
        inset: "1rem",
    };

    const save = () => {
        localStorage.setItem("data", data);
    };
</script>

<App {...AppDetails}>
    <Titlebar {title} />
    <div class="content flex flex-jc flex-ac flex-dirc">
        <textarea>
███████╗██╗░░░░░███████╗██╗░░██╗██╗██████╗░██╗██╗░░░░░██╗████████╗██╗░░░██╗
██╔════╝██║░░░░░██╔════╝╚██╗██╔╝██║██╔══██╗██║██║░░░░░██║╚══██╔══╝╚██╗░██╔╝
█████╗░░██║░░░░░█████╗░░░╚███╔╝░██║██████╦╝██║██║░░░░░██║░░░██║░░░░╚████╔╝░
██╔══╝░░██║░░░░░██╔══╝░░░██╔██╗░██║██╔══██╗██║██║░░░░░██║░░░██║░░░░░╚██╔╝░░
██║░░░░░███████╗███████╗██╔╝╚██╗██║██████╦╝██║███████╗██║░░░██║░░░░░░██║░░░
╚═╝░░░░░╚══════╝╚══════╝╚═╝░░╚═╝╚═╝╚═════╝░╚═╝╚══════╝╚═╝░░░╚═╝░░░░░░╚═╝░░░
--------------------------------------------------------------------------------------------------------------------
----> Interns are given the freedom to work either from 9 to 6 or 8 to 5, with breaks from 12 to 1; and every day is remote work or work from home except Thursdays
----> Depending on the department, interns will either be onsite dealing with clients or remote 
----> Interns are encouraged to go onsite to the office every Thursday to interact with everybody else, so basically.... "socialize"

██╗░░██╗░█████╗░███╗░░██╗██████╗░░██████╗░░░░░░░█████╗░███╗░░██╗
██║░░██║██╔══██╗████╗░██║██╔══██╗██╔════╝░░░░░░██╔══██╗████╗░██║
███████║███████║██╔██╗██║██║░░██║╚█████╗░█████╗██║░░██║██╔██╗██║
██╔══██║██╔══██║██║╚████║██║░░██║░╚═══██╗╚════╝██║░░██║██║╚████║
██║░░██║██║░░██║██║░╚███║██████╔╝██████╔╝░░░░░░╚█████╔╝██║░╚███║
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░╚═════╝░░░░░░░░╚════╝░╚═╝░░╚══╝
--------------------------------------------------------------------------------------------------------------------
----> Interns are given tasks that not only fulfill their academic needs (if the internship is part of their practicum) but also test their skills and communication skills
----> Group communication and a certain level of project management is trained when dealing with deliverables handed to the interns
----> Review sessions are also done to ensure that interns are getting the feedback to improve, and not just have us do something and move on

░██████╗░█████╗░██████╗░██╗░░░██╗███╗░░░███╗
██╔════╝██╔══██╗██╔══██╗██║░░░██║████╗░████║
╚█████╗░██║░░╚═╝██████╔╝██║░░░██║██╔████╔██║
░╚═══██╗██║░░██╗██╔══██╗██║░░░██║██║╚██╔╝██║
██████╔╝╚█████╔╝██║░░██║╚██████╔╝██║░╚═╝░██║
╚═════╝░░╚════╝░╚═╝░░╚═╝░╚═════╝░╚═╝░░░░░╚═╝
--------------------------------------------------------------------------------------------------------------------
----> Scrum is an agile development methodology used in the development of Software based on an iterative and incremental processes
----> Daily Standups (DSUs) are done every morning depending on the department to get the intern used to corporate life and train them (meaning us) to learn to communicate what was done the previous day, what will be done the current day, and any problems facing the team and project; this also trains us to be direct with our words while doing so in a respectful way... yes, yes
----> We are also encouraged to join the weekly cadences to get a feel of what it's like to be part of a team and a company with weekly and monthly goals; it is here where we learn about communicating company goals on a weekly basis, take in criticism as a form of improvement, brainstorming, and sitting in nice office (and also how it's done in an online setup)            
        </textarea>
    </div>

    <button on:click={save}>Save</button>
</App>

<style>
    div.content {
        padding: 45px 0.2rem 0.2rem 0.2rem;
        gap: 0.2rem;
        width: 100%;
    }
    textarea {
        height: 100%;
        width: 100%;
        background-color: transparent;
        border: 0;
        border-radius: inherit;
        background-color: #050606;
        color: #F9F4E8;
        outline: 0;
        scrollbar-width: thin;
        border-radius: 0.5rem;
        padding: 5px;
    }
    button {
        all: unset;
        position: fixed;
        top: 0.5rem;
        right: 0.5rem;
        background-color: var(--color-primary1);
        color: var(--color-text);
        border-radius: 0.3rem;
        padding: 0.2rem 0.8rem;
        font-size: 0.8rem;
        transition: all 0.3s;
        cursor: pointer;
    }
    button:hover {
        color: var(--color-bg);
        background-color: var(--color-primary2);
    }
</style>
