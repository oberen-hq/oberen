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
  })
  roles!: string[];

  @Field(() => Profile, { nullable: true })
  @OneToOne(() => Profile, (profile) => profile.user)
  profile?: Profile;

  @Field(() => [Session], { nullable: true })
  @OneToMany(() => Session, (session) => session.user)
  sessions?: Session[];

  @Field(() => [Error], { nullable: true })
  @OneToMany(() => Error, (error) => error.user)
  errors?: Error[];

  @Field(() => [Organization], { nullable: true })
  @OneToMany(() => Organization, (organization) => organization.creator)
  ownedOrganizations?: Organization[];

  @Field(() => [Organization], { nullable: true })
  @ManyToMany(() => Organization, (organization) => organization.members)
  joinedOrganizations?: Organization[];

  @Field(() => [Job], { nullable: true })
  @ManyToMany(() => Job, (job) => job.employees)
  jobs?: Job[];

  @Field(() => [Post], { nullable: true })
  @ManyToMany(() => Task, (task) => task.assigned)
  tasks?: Task[];

  @Field(() => [Post], { nullable: true })
  @OneToMany(() => Post, (post) => post.author)
  posts?: Post[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
