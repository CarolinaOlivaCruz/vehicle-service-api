const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");

@Entity()
class Customer {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  name;

  @Column()
  email;

  @Column()
  phone;

  @Column()
  gender;

  @Column()
  birth;

  @Column()
  cpf;

  @Column()
  address;

  @Column()
  created_at;
}

module.exports = Customer;
