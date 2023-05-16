import { Router } from 'express'
import { getReactions } from '../controllers/reactionController.js'

const router = Router()

router.route('/api/reactions').get(getReactions)

export default router
