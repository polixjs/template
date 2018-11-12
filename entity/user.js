import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  BaseEntity
} from 'typeorm';

@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column('varchar')
    name = '';
  
}

module.exports = User;