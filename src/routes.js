import { Router } from 'express'
import multer from 'multer'

import multerConfig from './config/multer'

const upload = multer(multerConfig)
const routes = new Router()

import ArticlesController from './app/controllers/ArticlesController'
import CategoryController from './app/controllers/CategoryController'
import OneArticleController from './app/controllers/OneArticleController'

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Ok' })
})

routes.post('/articles', upload.single('file'), ArticlesController.store)
routes.get('/articles', ArticlesController.index)
routes.get('/article/:id', OneArticleController.index)
routes.put('/articles/:id', upload.single('file'), ArticlesController.update)

routes.post('/category', upload.single('file'), CategoryController.store)
routes.get('/category', CategoryController.index)
routes.put('/category/:id', upload.single('file'), CategoryController.update)

export default routes
