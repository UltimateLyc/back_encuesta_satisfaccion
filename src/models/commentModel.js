import { DataTypes, sequelize } from '../config/config.js'
import { Reaction } from './reactionModel.js'

export const Comment = sequelize.define('comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false
  },
  comments: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'comment',
  schema: 'public',
  timestamps: true,
  indexes: [
    {
      name: 'comment_pkey',
      unique: true,
      fields: [
        { name: 'id' }
      ]
    }
  ]
})

Comment.hasOne(Reaction, {
  foreignKey: 'id_comment',
  sourceKey: 'id'
})

Reaction.belongsTo(Comment, {
  foreignKey: 'id_comment',
  targetKey: 'id'
})
