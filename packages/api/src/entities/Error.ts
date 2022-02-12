import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "./";

@ObjectType()
@Entity()
export default class Error extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => [String])
  @Column({
    type: "enum",
    array: true,
    enum: ["INTERNAL_SERVER_ERROR", "USER_NOT_FOUND", "INVALID_PASSWORD"],
    default: ["INTERNAL_SERVER_ERROR"],
  })
  type!: string[];

  @Field(() => String)
  @Column()
  field!: string;

  @Field(() => String)
  @Column()
  message!: string;

  @Field()
  @Column()
  userId: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.profile)
  user: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
