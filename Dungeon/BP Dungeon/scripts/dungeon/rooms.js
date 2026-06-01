export const rooms = [];

export function addRoom(gx, gz, type = "normal") {
    rooms.push({
        gx,
        gz,
        type
    });
}
export function getRoom(gx, gz) {
    return rooms.find(room => room.gx === gx && room.gz === gz);
}
export const ROOM_LAYOUTS = {
    "1x1": {
        width: 1,
        height: 1
    }
};
