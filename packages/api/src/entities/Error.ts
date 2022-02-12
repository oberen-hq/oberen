import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  OneToOne,
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

  @Field(() => Number)
  @Column()
  userId: number;

  @Field(() => User)
  @OneToOne(() => User, (user) => user.profile)
  user: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
