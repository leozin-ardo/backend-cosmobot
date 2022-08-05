import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from "typeorm";
import { Group } from "@/infra/orm/typeorm/schemas/group-entity";

@Entity({ name: "user" })
export class User {
    @PrimaryColumn({ type: "char", length: 36 })
    id: number;

    @Column({ type: "varchar", name: "first_name" })
    first_name: string;

    @Column({ type: "varchar", name: "last_name" })
    last_name: string;

    @Column({ type: "varchar", name: "email" })
    email: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Group, (group) => group.users)
    group: Group;
}
