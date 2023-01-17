'use strict'

const { BadRequest } = require('../errors/http')
const itemsService = require('../services/items')

async function sortItems (req, res, next) {
  try {
    const { sortKeys, payload } = req.body

    if (
      !Array.isArray(sortKeys) ||
      !(typeof payload === 'object' && payload !== null)
    ) {
      throw new BadRequest(
        'Missing or malformed params, check them'
      )
    }

    const response = await itemsService.sort({
      sortKeys,
      payload
    })

    return res.status(200).json(response)
  } catch (err) {
    next(err)
  }
}

module.exports = { sortItems }
