import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

export abstract class Base extends Date {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
