import * as Yup from 'yup'
import Category from '../models/Category'

class CategoryController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({
        error: err.errors,
      })
    }

    const { name } = request.body

    const categoryExists = await Category.findOne({
      where: {
        name,
      },
    })

    if (categoryExists) {
      return response.status(400).json({
        error: 'Category already exists',
      })
    }

    const { id } = await Category.create({
      name,
    })

    return response.status(201).json({
      id,
      name,
    })
  }

  catch(err) {
    console.log(err)
  }

  async index(request, response) {
    const categories = await Category.findAll()

    return response.json(categories)
  }

  async update(request, response) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string(),
      })

      try {
        await schema.validateSync(request.body, { abortEarly: false })
      } catch (err) {
        return response.status(400).json({
          error: err.errors,
        })
      }

      const { name } = request.body

      const { id } = request.params

      const category = await Category.findByPk(id)

      if (!category) {
        return response.status(401).json({
          error: 'Category not found, make sure your category id is correct',
        })
      }

      await Category.update(
        {
          name,
        },

        { where: { id } }
      )

      return response.status(204).json({ name })
    } catch (err) {}
  }

  async delete(request, response) {
    const id = request.params.id

    const categoryId = await Category.findByPk(id)

    if (!categoryId) {
      return response.status(401).json({
        error: 'Category not found, verify your Category Id is correct.',
      })
    } else {
      await Category.destroy({ where: { id } })
      response.status(204).json({ message: 'Deleted successfully' })
    }
  }
}

export default new CategoryController()
