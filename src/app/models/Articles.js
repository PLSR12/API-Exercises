import Sequelize, { Model } from 'sequelize'

class Articles extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        preview: Sequelize.STRING,
        content: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3001/article-file/${this.path}`
          },
        },
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

export default Articles
