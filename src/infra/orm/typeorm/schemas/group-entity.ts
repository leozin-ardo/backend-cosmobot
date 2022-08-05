import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { User } from "@/infra/orm/typeorm/schemas/user-entity";

@Entity({ name: "group" })
export class Group {
    @PrimaryColumn({ type: "char", length: 36 })
    id: number;

    @Column({ type: "varchar", name: "name" })
    name: string;

    @Column({ type: "varchar", name: "description" })
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => User, (user) => user.group, { cascade: true })
    users: User[];
}
