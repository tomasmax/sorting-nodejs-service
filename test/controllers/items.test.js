/* global describe it  expect */
const supertest = require('supertest')
const server = require('../../src/server')
const request = supertest(server)

const itemsSortApiPath = '/api/v1/items/sort'
const body = {
  sortKeys: ['fruits', 'numbers'],
  payload: {
    fruits: ['watermelon', 'apple', 'pineapple'],
    numbers: [1333, 4, 2431, 7],
    colors: ['green', 'blue', 'yellow']
  }
}

const expectedResponse = {
  sortKeys: [
    'fruits',
    'numbers'
  ],
  payload: {
    fruits: [
      'apple',
      'pineapple',
      'watermelon'
    ],
    numbers: [
      4,
      7,
      1333,
      2431
    ],
    colors: [
      'green',
      'blue',
      'yellow'
    ]
  }
}

describe('Controllers/items', () => {
  it('Should get payload sorted', async () => {
    const response = await request.post(itemsSortApiPath).send(body)

    expect(response.status).toBe(200)
    expect(response.type).toEqual('application/json')

    expect(response.body).toMatchObject(expectedResponse)
  })
})
