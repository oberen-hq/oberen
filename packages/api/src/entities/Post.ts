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

  @Field(() => [String])
  @Column({
    type: "enum",
    array: true,
    enum: ["post", "job", "task", "feedback", "poll", "article"],
    default: ["post"],
  })
  type!: string[];

  @Field(() => Boolean)
  @Column({ default: true })
  public!: boolean;

  @Field()
  @Column()
  authorId: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.posts)
  author: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
