import { Router } from '../config/config.js'
import { newComment } from '../controllers/commentController.js'

const router = Router()
router.route('/api/comments').post(newComment)

export default router
