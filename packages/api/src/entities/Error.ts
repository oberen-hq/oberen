import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { User } from "./";

@ObjectType()
@Entity()
export default class Error extends BaseEntity {
  @Field()
  @PrimaryColumn({ default: () => uuid() })
  id!: string;

  @Field()
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
