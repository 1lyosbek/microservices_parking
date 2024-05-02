import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondtMigration1714193577215 implements MigrationInterface {
    name = 'SecondtMigration1714193577215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "car_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "park_id" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "park_id" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "car_id"`);
    }

}
