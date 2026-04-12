import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../../../common/security/enum/role.enum";

@Entity('users')
export class User {
  constructor(
    email: string,
    passwordHash: string,
    firstName: string,
    lastName: string,
    role: Role = Role.USER,
  ) {
    this.email = email;
    this.passwordHash = passwordHash;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActive = true;
    this.role = role;
  }

  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @Index()
  @Column({ unique: true, length: 255 })
  email: string;

  @Column({ select: false })
  passwordHash: string;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;
}