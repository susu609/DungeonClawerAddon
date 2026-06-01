import { world } from "@minecraft/server";

const OVERWORLD = world.getDimension("overworld");

export function createNodeGrid() {

    OVERWORLD.runCommand(
        "kill @e[type=ss:room_node]"
    );

    for (let gx = -4; gx <= 4; gx++) {

        for (let gz = -4; gz <= 4; gz++) {

            const x = gx * 16 + 8;
            const z = gz * 16 + 8;

            OVERWORLD.runCommand(
                `summon ss:room_node ${x} 64 ${z}`
            );
        }
    }

    initializeNodeScores();
}

export function initializeNodeScores() {

    const gxObjective =
        world.scoreboard.getObjective("gx");

    const gzObjective =
        world.scoreboard.getObjective("gz");

    const activeObjective =
        world.scoreboard.getObjective("active");

    const roomtypeObjective =
        world.scoreboard.getObjective("roomtype");

    const nodes = OVERWORLD.getEntities({
        type: "ss:room_node"
    });

    for (const node of nodes) {

        if (!node.scoreboardIdentity) continue;

        const gx = Math.floor(
            (node.location.x - 8) / 16
        );

        const gz = Math.floor(
            (node.location.z - 8) / 16
        );

        gxObjective?.setScore(
            node.scoreboardIdentity,
            gx
        );

        gzObjective?.setScore(
            node.scoreboardIdentity,
            gz
        );

        activeObjective?.setScore(
            node.scoreboardIdentity,
            0
        );

        roomtypeObjective?.setScore(
            node.scoreboardIdentity,
            0
        );
    }
}
export function getNode(gx, gz) {

    const nodes = OVERWORLD.getEntities({
        type: "ss:room_node"
    });

    for (const node of nodes) {

        if (!node.scoreboardIdentity) continue;

        const nodeGX =
            world.scoreboard
                .getObjective("gx")
                ?.getScore(node.scoreboardIdentity);

        const nodeGZ =
            world.scoreboard
                .getObjective("gz")
                ?.getScore(node.scoreboardIdentity);

        if (
            nodeGX === gx &&
            nodeGZ === gz
        ) {
            return node;
        }
    }

    return undefined;
}