import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CatEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  breed: string;
}
