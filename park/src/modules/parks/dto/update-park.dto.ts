export class UpdateParkDto  {
    name: string;
    capacity: number;
    price: number;
    userId: number;
}

export interface IUpdateData{
    name: string;
    capacity: number;
    price: number;
    userId: number;
}

export interface IParkUpdate{
    id: number;
    data: IUpdateData;
}