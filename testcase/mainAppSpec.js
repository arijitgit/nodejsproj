var chai = require('chai');
var expect = require('chai').expect;
var mainUtil = require('../util/mainUtil');


describe('Testing verifyNumber', function() {
 it('verifyNumber',function(){
   var input = 15;
   var result = mainUtil.isGreaterThanTen(input);
   isGreaterThanTen = input + ' is Greater than 10';
   expect(result).to.equal(isGreaterThanTen);
 })
})

describe('Testing starts', function() {
 it('Check Zero'  , function(){
   expect('0').to.equal('0');
 })
})
