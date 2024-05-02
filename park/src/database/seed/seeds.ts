import { connectionSource } from "src/common/config/database.config";
import { ParkEntity } from "src/modules/parks/entities/park.entity";
import { createConnection, DataSource } from "typeorm";

(async () => {
    const connection: DataSource = await createConnection(connectionSource);

    const queryRunner = connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
        const parkRepository = queryRunner.manager.getRepository(ParkEntity);
        const parks = await parkRepository.find();
        await parkRepository.remove(parks);
        const newPark = new ParkEntity();
        newPark.name = 'GRAND';
        newPark.capacity = 1000;
        newPark.price = 2000;
        newPark.userId = 2;
        await parkRepository.save<ParkEntity>(newPark);
        await queryRunner.commitTransaction();
    } catch (err) {
        console.log("error", err);
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }
})();
