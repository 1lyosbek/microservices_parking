import { connectionSource } from "src/common/config/database.config";
import { RoleEnum } from "src/common/enums/enum";
import { UserEntity } from "src/modules/users/entities/user.entity";
import { createConnection, DataSource } from "typeorm"



( async () => {
    const connection: DataSource = await createConnection(connectionSource);

    const queryRunner = connection.createQueryRunner();
    
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
        const userRepository = queryRunner.manager.getRepository(UserEntity);
        const users = await userRepository.find();
        await userRepository.remove(users);
        const newUser = new UserEntity();
        newUser.phoneNumber = "+998335701001";
        newUser.password = "test";
        newUser.role = RoleEnum.ADMIN;
        newUser.balance = 1000;
        newUser.parkId = 2;
        await userRepository.save<UserEntity>(newUser);
        await queryRunner.commitTransaction();
    } catch (err) {
        console.log("error", err);
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }
})();
