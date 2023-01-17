'use strict'

const collator = new Intl.Collator(
  undefined,
  { numeric: true, sensitivity: 'base' }
)

async function sort ({ sortKeys = [], payload = {} }) {
  try {
    const sortedPayload = { ...payload }
    sortKeys.forEach((key) => {
      const sortedArray = [...payload[key]]?.sort(collator.compare)
      sortedPayload[key] = sortedArray
    })

    return { sortKeys, payload: sortedPayload }
  } catch (err) {
    console.error('[service/items]:Error sorting items:', err.message)
    throw new Error('[service/items]:Error sorting items:', err.message)
  }
}

module.exports = {
  sort
}
