import * as Yup from 'yup'
import Exercises from '../models/Exercises'
import Category from '../models/Category'

class ExerciseController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      objective: Yup.string().required(),
      url: Yup.string(),
      category_id: Yup.number().required(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({
        error: err.errors,
      })
    }

    const { name, description, objective, url, category_id } = request.body

    const exercise = await Exercises.create({
      name,
      description,
      objective,
      url,
      category_id,
    })

    return response.json(exercise)
  }

  async index(request, response) {
    const exercises = await Exercises.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name', 'url', 'path'],
        },
      ],
    })

    return response.json(exercises)
  }

  async show(request, response) {
    const { id } = request.params

    const exerciseId = await Exercises.findByPk(id, {
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    })

    if (!exerciseId) {
      return response.status(401).json({
        error: 'Exercises not found, verify your Exercises Id is correct.',
      })
    }

    return response.json(exerciseId)
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      objective: Yup.string().required(),
      url: Yup.string(),
      category_id: Yup.number().required(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({
        error: err.errors,
      })
    }

    const { id } = request.params

    const exerciseId = await Exercises.findByPk(id)

    if (!exerciseId) {
      return response.status(401).json({
        error: 'Exercises not found, verify your Exercises Id is correct.',
      })
    }

    const { name, description, objective, url, category_id } = request.body

    const exercise = await Exercises.update(
      {
        name,
        description,
        objective,
        url,
        category_id,
      },

      { where: { id } }
    )
    return response.json(exercise)
  }

  async delete(request, response) {
    const id = request.params.id

    const exerciseId = await Exercises.findByPk(id)

    if (!exerciseId) {
      return response.status(401).json({
        error: 'Exercises not found, verify your Exercises Id is correct.',
      })
    } else {
      await Exercises.destroy({ where: { id } })
      response.status(200).json({ message: 'Deleted successfully' })
    }
  }
}

export default new ExerciseController()
