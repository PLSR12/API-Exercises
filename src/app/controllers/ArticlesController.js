import * as Yup from 'yup'
import Articles from '../models/Articles'
import Category from '../models/Category'

class ArticleController {
  async store(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      preview: Yup.string().required(),
      content: Yup.string().required(),
      category_id: Yup.number().required(),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({
        error: err.errors,
      })
    }

    const { filename: path } = request.file
    const { title, preview, content, category_id } = request.body

    const article = await Articles.create({
      title,
      preview,
      content,
      category_id,
      path,
    })

    return response.json(article)
  }

  async index(request, response) {
    const articles = await Articles.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    })

    return response.json(articles)
  }
  F

  async update(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      preview: Yup.string().required(),
      content: Yup.string().required(),
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

    const articleId = await Articles.findByPk(id)

    if (!articleId) {
      return response.status(401).json({
        error: 'articles not found, verify your articles Id is correct.',
      })
    }

    let path
    if (request.file) {
      path = request.file.filename
    }

    const { title, preview, content, category_id } = request.body

    const article = await Articles.update(
      {
        title,
        preview,
        content,
        category_id,
      },

      { where: { id } }
    )
    return response.json({ title, preview, category_id })
  }
}

export default new ArticleController()
