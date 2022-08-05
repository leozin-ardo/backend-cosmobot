import { UuidProvider } from "@/main/factories/uuid-provider";

export class GroupModel {
    readonly id: string;
    name!: string;
    description!: string;

    constructor(group: groupFactory) {
        this.id = UuidProvider.generate();
        Object.assign(this, group);
    }
}

type groupFactory = {
    name: string;
    description: string;
};
