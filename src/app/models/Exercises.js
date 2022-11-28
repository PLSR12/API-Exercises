import Sequelize, { Model } from 'sequelize'

class Exercises extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        objective: Sequelize.STRING,
        url: Sequelize.STRING,
      },

      {
        sequelize,
      }
    )
    return this
  }
  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    })
  }
}

export default Exercises
