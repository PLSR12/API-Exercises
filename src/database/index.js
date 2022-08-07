import Sequelize from 'sequelize'

import Articles from '../app/models/Articles'
import Category from '../app/models/Category'
import User from '../app/models/User'

import configDataBase from '../config/database'

const models = [Articles, Category, User]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDataBase)
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }
}

export default new Database()
