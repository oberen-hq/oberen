import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  PrimaryColumn,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { User } from "./";

@ObjectType()
@Entity()
export default class Organization extends BaseEntity {
  @Field()
  @PrimaryColumn({ default: () => uuid() })
  id!: string;

  @Field()
  @Column()
  creatorId: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.profile)
  creator: User;

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.joinedOrganizations)
  members: User[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
