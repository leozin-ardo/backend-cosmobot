import { UuidProvider } from "@/main/factories/uuid-provider";

export class UserModel {
    readonly id: string;
    first_name: string;
    last_name: string;
    email: string;
    group_id: string;

    constructor(user: userFactory) {
        this.id = UuidProvider.generate();
        Object.assign(this, user);
    }
}

type userFactory = {
    firstName: string;
    lastName: string;
    email: string;
    group_id: string;
};
