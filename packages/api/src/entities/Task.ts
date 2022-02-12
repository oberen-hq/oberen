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
export default class Task extends BaseEntity {
  @Field()
  @PrimaryColumn({ default: () => uuid() })
  id!: string;

  @Field()
  @Column()
  creatorId: number;

  @Field(() => User)
  @OneToOne(() => User, (user) => user.profile)
  creator: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
