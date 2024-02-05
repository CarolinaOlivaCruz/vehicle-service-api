const { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } = require('typeorm');
const Customer = require('./Customer');

@Entity()
class Vehicle {
  @PrimaryGeneratedColumn()
  id;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer;

  @Column()
  type;

  @Column()
  plate;

  @Column()
  brand;

  @Column()
  model;

  @Column()
  year_of_manufacture;

  @Column()
  color;

  @Column()
  current_mileage;

  @Column()
  last_revision;

  @Column()
  created_at;
}

module.exports = Vehicle;