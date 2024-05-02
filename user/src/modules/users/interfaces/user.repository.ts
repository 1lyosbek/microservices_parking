import { UserEntity } from "../entities/user.entity";

export interface IUserRepository {
    getAll(): Promise<Array<UserEntity>>;
    getById(id: number): Promise<UserEntity>;
    getByPhone(phoneNumber: string): Promise<UserEntity | null>;
    create(entity: UserEntity): Promise<UserEntity>;
    update(entity: UserEntity): Promise<UserEntity>;
    delete(entity: UserEntity): Promise<UserEntity>;
}