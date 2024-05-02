import { BaseEntity } from 'src/common/database/base.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';

@Entity('parks')
export class ParkEntity extends BaseEntity {
    @Column({
        name: 'name',
        type: 'varchar',
        length: 64,
        unique: true,
        nullable: false,
    })
    name: string;

    @Column({
        name: 'capacity',
        type: 'int',
        nullable: false,
    })
    capacity: number;

    @Column({
        name: 'price',
        type: 'int',
        nullable: false,
    })
    price: number;

    @Column({
        name: 'user_id',
        type: 'int',
        nullable: false,
    })
    userId: number;
}

