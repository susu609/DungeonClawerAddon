import { world, system } from "@minecraft/server";

import "./dungeon/debug.js";

import { generateDungeon } from "./dungeon/generator.js";
import { createNodeGrid } from "./dungeon/nodes.js";
import { setSeed } from "./dungeon/seed.js";

let initialized = false;

system.runInterval(() => {
    if (initialized) return;

    if (world.getAllPlayers().length === 0) return;

    generateDungeon();

    world.sendMessage("Dungeon Generated");

    initialized = true;
}, 20);

world.beforeEvents.chatSend.subscribe(event => {
    const msg = event.message.trim();

    if (msg === "!dungeon") {
        generateDungeon();

        world.sendMessage("Dungeon Generated");

        event.cancel = true;
        return;
    }

    if (msg === "!reset") {
        createNodeGrid();

        world.sendMessage("Nodes Reset");

        event.cancel = true;
        return;
    }

    if (msg.startsWith("!seed ")) {
        const seed = Number(msg.split(" ")[1]);

        if (!Number.isNaN(seed)) {
            setSeed(seed);

            world.sendMessage(`Seed = ${seed}`);
        }

        event.cancel = true;
    }
});
