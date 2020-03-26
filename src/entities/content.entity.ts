import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'contents'})
export class Content{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: "audio" | "video" | "photo";

  @Column()
  author: string;

  @Column({default: new Date().toString()})
  date: string;

  @Column()
  fileLink: string;

  @Column()
  previewPicture: string;

  @Column()
  title: string;
}
