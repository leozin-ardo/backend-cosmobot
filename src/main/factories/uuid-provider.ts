import { uuid } from "uuidv4";

export class UuidProvider {
    static generate = () => uuid();
}
