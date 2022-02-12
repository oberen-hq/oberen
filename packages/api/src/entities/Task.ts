import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  OneToOne,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./";

@ObjectType()
@Entity()
export default class Task extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  creatorId: number;

  @Field(() => User)
  @OneToOne(() => User, (user) => user.profile)
  creator: User;

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.tasks)
  assigned?: User[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
