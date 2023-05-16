/* eslint-disable camelcase */
import { Reaction } from '../config/module.config.js'
import { asyncHandler } from '../config/config.js'

export const getReactions = asyncHandler(async (req, res) => {
  const response = await Reaction.findAll()
  res.status(200).json(response)
})
