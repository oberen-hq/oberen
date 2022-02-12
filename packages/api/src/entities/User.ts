import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  OneToMany,
  OneToOne,
  ManyToMany,
} from "typeorm";

import { Profile, Session, Error, Post, Organization, Job, Task } from "./";

@ObjectType()
@Entity()
export default class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  username!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Field(() => [String])
  @Column({
    type: "enum",
    array: true,
    enum: ["admin", "employer", "employee"],
    default: ["employee"],
  })
  role!: string[];

  @Field(() => Profile)
  @OneToOne(() => Profile, (profile) => profile.user)
  profile?: Profile;

  @Field(() => [Session])
  @OneToMany(() => Session, (session) => session.user)
  sessions?: Session[];

  @Field(() => [Error])
  @OneToMany(() => Error, (error) => error.user)
  errors?: Error[];

  @Field(() => [Organization])
  @OneToMany(() => Organization, (organization) => organization.creator)
  ownedOrganizations?: Organization[];

  @Field(() => [Organization])
  @ManyToMany(() => Organization, (organization) => organization.members)
  joinedOrganizations?: Organization[];

  @Field(() => [Job])
  @ManyToMany(() => Job, (job) => job.employees)
  jobs?: Job[];

  @Field(() => [Post])
  @ManyToMany(() => Task, (task) => task.assigned)
  tasks?: Task[];

  @Field(() => [Post])
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
