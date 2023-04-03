import { Column, DeleteDateColumn, Entity, OneToMany } from "typeorm";
import { Base } from "./base.entity";
import { Post } from "./post.entity";

@Entity("user")
export class User extends Base {
    @Column({ type: "varchar", length: 40, unique: true })
    email: string;

    @Column({ type: "varchar", length: 30, nullable: false })
    password: string;

    @Column({ type: "int", default: 0 })
    viewCont: number;

    @DeleteDateColumn()
    deleteAt: Date | null;

    @OneToMany(() => Post, (post) => post.author, {
        onDelete: "CASCADE",
    })
    posts: Post[];
}
