import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1714196548774 implements MigrationInterface {
    name = 'FirstMigration1714196548774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "parks" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "last_update_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(64) NOT NULL, "capacity" integer NOT NULL, "price" integer NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "UQ_c0083b667f0488512b094512521" UNIQUE ("name"), CONSTRAINT "PK_035f21558c39565edbf33f03210" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "parks"`);
    }

}
