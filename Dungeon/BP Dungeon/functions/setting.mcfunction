tellraw @a {"rawtext":[{"text":"§e[Dungeon] §fInitializing system..."}]}

# =========================
# SCOREBOARD
# =========================

scoreboard objectives add gx dummy
scoreboard objectives add gz dummy

scoreboard objectives add active dummy
scoreboard objectives add roomtype dummy
scoreboard objectives add deadend dummy

scoreboard objectives add visited dummy
scoreboard objectives add distance dummy

tellraw @a {"rawtext":[{"text":"§a[Dungeon] §fScoreboards created"}]}

# =========================
# CLEAN OLD NODES
# =========================

kill @e[type=ss:room_node]

tellraw @a {"rawtext":[{"text":"§c[Dungeon] §fOld nodes removed"}]}

# =========================
# FINISH
# =========================

tellraw @a {"rawtext":[{"text":"§b[Dungeon] §fSystem ready"}]}