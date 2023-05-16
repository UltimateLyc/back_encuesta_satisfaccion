import { sequelize } from './config.js'

export const defaultReactions = async () => {
  try {
    await sequelize.query(`
        INSERT INTO reaction (name) VALUES ('very_bad'), ('bad'), ('normal'), ('good'), ('very_good');
        `)
  } catch (error) {
    console.error('Error al insertar datos por defecto:', error)
  } finally {
    sequelize.close()
  }
}
