const express = require('express')
const {
  sortItems
} = require('../../../controllers/items')

function itemsRouter () {
  const router = express.Router()

  // routes over /items
  router.post('/sort', sortItems)

  return router
}

module.exports = itemsRouter
