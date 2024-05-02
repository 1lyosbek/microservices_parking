import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { IUserRepository } from "./interfaces/user.repository";

export class UserRepository implements IUserRepository {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}
    async create(entity: UserEntity): Promise<UserEntity> {
        return await this.userRepository.save(entity);
    }
    async getAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }
    async getByPhone(phoneNumber: string): Promise<UserEntity>{
        return await this.userRepository.findOneBy({ phoneNumber });
    }
    async getById(id: number): Promise<UserEntity> {
        return await this.userRepository.findOneBy({id});
    }
    async update(entity: UserEntity): Promise<UserEntity> {
        return await this.userRepository.save(entity);
    }
    async delete(entity: UserEntity): Promise<UserEntity> {
       return await this.userRepository.remove(entity);
    }
}