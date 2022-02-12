import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  BeforeInsert,
} from "typeorm";

import { v4 as uuid } from "uuid";
import User from "./User";

@ObjectType()
@Entity()
export default class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @BeforeInsert()
  setId() {
    this.id = uuid();
  }

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  text!: string;

  @Field()
  @Column()
  userId: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
