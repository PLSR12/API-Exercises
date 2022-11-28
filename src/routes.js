import { Router } from 'express'
import multer from 'multer'

import multerConfig from './config/multer'

const upload = multer(multerConfig)
const routes = new Router()

import ExercisesController from './app/controllers/ExercisesController'
import CategoryController from './app/controllers/CategoryController'
import SessionController from './app/controllers/SessionController'
import UserController from './app/controllers/UserController'

import authMiddleware from './app/middlewares/auth'

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Ok' })
})

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)
routes.get('/exercise', ExercisesController.index)
routes.get('/exercise/:id', ExercisesController.show)
routes.get('/category', CategoryController.index)

routes.use(authMiddleware)
routes.post('/exercise', upload.single('file'), ExercisesController.store)
routes.put('/exercise/:id', upload.single('file'), ExercisesController.update)
routes.delete('/exercise/:id', ExercisesController.delete)

routes.post('/category', upload.single('file'), CategoryController.store)
routes.put('/category/:id', upload.single('file'), CategoryController.update)
routes.delete('/category/:id', CategoryController.delete)

export default routes
