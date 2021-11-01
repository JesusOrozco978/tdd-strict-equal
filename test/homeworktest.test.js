const { expect } = require('chai')
const strictEqual = require('../homework')
const describe = require('mocha').describe
const it = require('mocha').describe


  describe('strictEqual', () => {
    it('will make vaule false', () => {
      
      
      //call the fuction with the test data
      const result = strictEqual(5,'5')
      

      // make assetion about what should be false
      expect(result).to.equal(false)
    })
    it('will make vaule true', () => {
      
      
      //call the fuction with the test data
      const result = strictEqual(5,5)
      

      // make assetion about what should be false
      expect(result).to.equal(true)
  })
   it('should be false comapring a strirng to a value' , () => {
     const result = strictEqual(29,'29')
    
    expect(result).to.equal(false)
   }
   it('should be false comapring a strirng to a arr' , () => {
    const result = strictEqual(29,[29])
   
   expect(result).to.equal(false)
   }
  }
