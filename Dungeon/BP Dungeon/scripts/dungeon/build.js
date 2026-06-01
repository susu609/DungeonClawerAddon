import { BlockPermutation, world } from "@minecraft/server";

const OVERWORLD = world.getDimension("overworld");

export function buildRoom(gx, gz) {

    const startX = gx * 16;
    const startY = 64;
    const startZ = gz * 16;

    for (let x = 0; x < 16; x++) {

        for (let z = 0; z < 16; z++) {

            OVERWORLD.getBlock({
                x: startX + x,
                y: startY,
                z: startZ + z
            })?.setPermutation(
                BlockPermutation.resolve("minecraft:stone")
            );

        }
    }

    for (let y = 1; y < 16; y++) {

        for (let x = 0; x < 16; x++) {

            for (let z = 0; z < 16; z++) {

                const wall =
                    x === 0 ||
                    x === 15 ||
                    z === 0 ||
                    z === 15 ||
                    y === 15;

                if (!wall) continue;

                OVERWORLD.getBlock({
                    x: startX + x,
                    y: startY + y,
                    z: startZ + z
                })?.setPermutation(
                    BlockPermutation.resolve(
                        "minecraft:stone_bricks"
                    )
                );

            }
        }
    }

}