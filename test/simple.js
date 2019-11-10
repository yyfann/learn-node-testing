const { add } = require('../src/math')
const { should, expect, assert } = require('chai')

describe('#math', () => {
  describe('add', () => {
    it('should return 5 when 2 + 3', () => {
      expect(add(2, 3)).to.be.equal(7)
    })
  })
})

// BDD
// should()
// add(2, 3).should.equal(6)
// expect(add(2, 3)).to.be.equal(5)
// TDD
// assert.equal(add(2, 3), 5)
