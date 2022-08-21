import { Router } from 'express'
import multer from 'multer'

import multerConfig from './config/multer'

const upload = multer(multerConfig)
const routes = new Router()

import ArticlesController from './app/controllers/ArticlesController'
import CategoryController from './app/controllers/CategoryController'
import SessionController from './app/controllers/SessionController'
import UserController from './app/controllers/UserController'

import authMiddleware from './app/middlewares/auth'

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Ok' })
})

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)
routes.get('/article', ArticlesController.index)
routes.get('/article/:id', ArticlesController.show)
routes.get('/category', CategoryController.index)

routes.use(authMiddleware)
routes.post('/article', upload.single('file'), ArticlesController.store)
routes.put('/article/:id', upload.single('file'), ArticlesController.update)
routes.delete('/article/:id', ArticlesController.delete)

routes.post('/category', upload.single('file'), CategoryController.store)
routes.put('/category/:id', upload.single('file'), CategoryController.update)
routes.delete('/category/:id', CategoryController.delete)

export default routes
