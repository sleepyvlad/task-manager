import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TaskManager1585224241732 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
        name: "contents",
        columns: [
            {
                name: "id",
                type: "int",
                isPrimary: true
            },
            {
                name: "type",
                type: "varchar",
            },
            {
                name: "author",
                type: "varchar",
            },
            {
                name: "date",
                type: "varchar",
            },
            {
                name: "fileLink",
                type: "varchar",
            },
            {
                name: "previewPicture",
                type: "varchar",
            },
            {
                name: "title",
                type: "varchar",
            }
        ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable("contents");
  }
}
