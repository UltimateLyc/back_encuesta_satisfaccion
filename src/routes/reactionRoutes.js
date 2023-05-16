import { Router } from '../config/config.js'
import { getReactions } from '../controllers/reactionController.js'

const router = Router()

router.route('/api/reactions').get(getReactions)

export default router
