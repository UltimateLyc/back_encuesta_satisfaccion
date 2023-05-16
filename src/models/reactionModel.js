import { DataTypes, sequelize } from '../config/config.js'
import { Comment } from './commentModel.js'

export const Reaction = sequelize.define('reaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'reaction',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: 'reaction_pkey',
      unique: true,
      fields: [
        { name: 'id' }
      ]
    }
  ]
})

Reaction.hasOne(Comment, {
  foreignKey: 'id_reaction',
  sourceKey: 'id'
})

Comment.belongsTo(Reaction, {
  foreignKey: 'id_reaction',
  targetKey: 'id'
})
