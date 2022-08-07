import { Router } from 'express'
import multer from 'multer'

import multerConfig from './config/multer'

const upload = multer(multerConfig)
const routes = new Router()

import SessionController from './app/controllers/SessionController'
import UserController from './app/controllers/UserController'
import ArticlesController from './app/controllers/ArticlesController'
import CategoryController from './app/controllers/CategoryController'

import authMiddleware from './app/middlewares/auth'

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Ok' })
})

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.post('/articles', upload.single('file'), ArticlesController.store)
routes.get('/articles', ArticlesController.index)
routes.get('/article/:id', ArticlesController.show)
routes.put('/articles/:id', upload.single('file'), ArticlesController.update)
routes.delete('/article/:id', ArticlesController.delete)

routes.post('/category', upload.single('file'), CategoryController.store)
routes.get('/category', CategoryController.index)
routes.put('/category/:id', upload.single('file'), CategoryController.update)
routes.delete('/category/:id', CategoryController.delete)

export default routes
