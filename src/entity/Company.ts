import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';

@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    owner: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    phone: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}