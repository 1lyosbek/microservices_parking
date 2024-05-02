import { ParkEntity } from "../entities/park.entity";

export interface IParkRepository {
    getAll(): Promise<ParkEntity[]>;
    getOneById(id: number):Promise<ParkEntity | undefined>;
    create(park: ParkEntity): Promise<ParkEntity>;
    update(entity: ParkEntity): Promise<ParkEntity>;
    delete(entity: ParkEntity): Promise<ParkEntity>;
}