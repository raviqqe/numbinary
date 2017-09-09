import { decode, encode } from "..";

test("Encode a number", () => {
    encode(42);
});

test("Decode a number", () => {
    decode(new Uint8Array([0b00111111, 0x00, 0x00, 0x00]));
});
