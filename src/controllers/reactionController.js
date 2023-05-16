/* eslint-disable camelcase */
import { Reaction } from '../config/module.config.js'
import asyncHandler from 'express-async-handler'

export const getReactions = asyncHandler(async (req, res) => {
  try {
    const response = await Reaction.findAll()
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
