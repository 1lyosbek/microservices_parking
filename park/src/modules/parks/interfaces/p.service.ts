import { ResData } from "src/lib/resData";
import { ParkEntity } from "../entities/park.entity";
import { CreateParkDto } from "../dto/create-park.dto";
import { UpdateParkDto } from "../dto/update-park.dto";

export interface IParkService {
    findAll(): Promise<ResData<ParkEntity[]>>;
    findOneById(id: number): Promise<ResData<ParkEntity>>;
    create(data: CreateParkDto): Promise<ResData<ParkEntity>>;
    update(id: number, data: UpdateParkDto): Promise<ResData<ParkEntity>>;
    remove(id: number): Promise<ResData<ParkEntity>>;
}