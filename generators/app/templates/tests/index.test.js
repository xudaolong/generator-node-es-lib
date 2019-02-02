import chai from 'chai'
import sinon from 'sinon'
require('dotenv').config({
  path: `${process.cwd()}/.env.test`
})
chai.use(require('chai-as-promised')).should()
const expect = chai.expect

describe('Integration ', () => {
  const sandBox = sinon.createSandbox()

  beforeEach(() => {})

  afterEach(() => {
    sandBox.restore()
  })

  describe('Test', () => {
    it('Test Case 1', () => {
      expect(process.env.NODE_ENV).to.be.eql('test')
    })
  })
})
