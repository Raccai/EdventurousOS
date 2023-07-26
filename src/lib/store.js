import { writable, readable } from "svelte/store";

import Music from '/src/routes/apps/Music.svelte';
import Terminal from '/src/routes/apps/Terminal.svelte';
import Sticky from '/src/routes/apps/Sticky.svelte';
import Browser from '/src/routes/apps/Browser.svelte';
import Notes from '/src/routes/apps/Notes.svelte';
import About from '/src/routes/apps/About.svelte';

export let apps = readable([
    {
        id: "Music",
        component: Music,
        icon: "/static/icons/Music.svg"
    },
    {
        id: "Terminal",
        component: Terminal,
        icon: "/static/icons/Terminal.svg"
    },
    {
        id: "Browser",
        component: Browser,
        icon: "/static/icons/Computer.svg"
    },
    {
        id: "Sticky",
        component: Sticky,
        icon: "/static/icons/Sticky.svg"
    },
    {
        id: "Notes",
        component: Notes,
        icon: "/static/icons/NotesMain.svg"
    },
    {
        id: "About",
        component: About,
        icon: "/static/icons/About.svg"
    }
])

export let openedApps = writable([]);

