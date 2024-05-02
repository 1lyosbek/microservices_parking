import { MigrationInterface, QueryRunner } from "typeorm";

export class First1714191839917 implements MigrationInterface {
    name = 'First1714191839917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "last_update_at" TIMESTAMP NOT NULL DEFAULT now(), "phone_number" text, "password" text, "role" "public"."users_role_enum" NOT NULL, "balance" integer NOT NULL DEFAULT '0', "park_id" integer NOT NULL DEFAULT '0', CONSTRAINT "UQ_17d1817f241f10a3dbafb169fd2" UNIQUE ("phone_number"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
