/* eslint-disable camelcase */
import { Comment } from '../models/commentModel.js'
import { asyncHandler } from '../config/config.js'

export const newComment = asyncHandler(async (req, res) => {
  const { user_name, company, comment, id_reaction } = req.body

  if (!user_name) {
    res.status(400)
    throw new Error('Favor de ingresar el nombre')
  }

  if (!company) {
    res.status(400)
    throw new Error('Favor de ingresar la compañia')
  }

  const setComment = await Comment.create({
    user_name,
    company,
    comment,
    id_reaction
  })

  res.status(201).json(setComment)
})
