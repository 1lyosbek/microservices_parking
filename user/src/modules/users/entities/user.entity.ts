import { BaseEntity } from '../../../common/database/base.entity';
import { RoleEnum } from '../../../common/enums/enum';
import {Column,Entity} from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
    @Column({ name: 'phone_number', type: 'text', unique: true, nullable: true })
    phoneNumber: string;

    @Column({ name: 'password', type: 'text', nullable: true })
    password: string;

    @Column({ name: 'role', type: 'enum', enum: RoleEnum, nullable: false })
    role: RoleEnum;

    @Column({ name: 'balance', type: 'int', nullable: false, default: 0 })
    balance: number;

    @Column({ name: 'park_id', type: 'int', nullable: false})
    parkId: number;
}

