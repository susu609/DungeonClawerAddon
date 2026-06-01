import { world, system } from "@minecraft/server";

system.runInterval(() => {

    const nodes = world.getDimension("overworld")
        .getEntities({
            type: "ss:room_node"
        });

    for (const node of nodes) {

        const gx = node.scoreboardIdentity
            ? world.scoreboard.getObjective("gx")
                ?.getScore(node.scoreboardIdentity)
            : 0;

        const gz = node.scoreboardIdentity
            ? world.scoreboard.getObjective("gz")
                ?.getScore(node.scoreboardIdentity)
            : 0;

        node.nameTag = `X:${gx} Z:${gz}`;
    }

}, 20);