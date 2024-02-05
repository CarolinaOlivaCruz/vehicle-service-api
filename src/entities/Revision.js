const { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } = require('typeorm');
const Vehicle = require('./Vehicle');

@Entity()
class Revision {
  @PrimaryGeneratedColumn()
  id;

  @ManyToOne(() => Vehicle)
  @JoinColumn({ name: 'vehicle_id' })
  vehicle;

  @Column()
  type;

  @Column()
  concluded;

  @Column()
  created_at;
}

module.exports = Revision;