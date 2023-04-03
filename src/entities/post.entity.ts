import {
    Column,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { Base } from "./base.entity";
import { User } from "./user.entity";

@Entity()
export class Post extends Base {
    @Column({ type: "varchar", length: 100, nullable: false })
    title: string;

    @Column({ type: "text", nullable: false })
    content: string;

    @Column({ type: "boolean", default: false })
    isPrivate: boolean;

    @DeleteDateColumn()
    deleteAt: Date;

    @ManyToOne(() => User, (user) => user.posts)
    author: User;
}
