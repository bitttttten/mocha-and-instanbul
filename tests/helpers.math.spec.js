import { expect } from 'chai'

import { roundToNDecimalPlaces } from '../app/helpers/math'

describe('Rounding to n Decimal Places', () => {
    it('should round to n decimal places', () => {
        const number = 12.56789314889516;
        expect(roundToNDecimalPlaces(number, 0)).to.equal(13)
        expect(roundToNDecimalPlaces(number, 1)).to.equal(12.6)
        expect(roundToNDecimalPlaces(number, 2)).to.equal(12.57)
        expect(roundToNDecimalPlaces(number, 4)).to.equal(12.5679)
        expect(roundToNDecimalPlaces(number, 8)).to.equal(12.56789315)
        expect(roundToNDecimalPlaces(number, 14)).to.equal(12.56789314889516)
    })
    it('should default rounding to 1 decimal place', () => {
        const number = 12.56789314889516;
        expect(roundToNDecimalPlaces(number)).to.equal(12.6)
    })
    it('should compensate for decimal places larger than the number itself', () => {
        const number = 543.36;
        expect(roundToNDecimalPlaces(number, 10)).to.equal(543.36)
        expect(roundToNDecimalPlaces(number, 200)).to.equal(543.36)
    })
    it('should be able to round with negative places', () => {
        const number = 2732.36;
        expect(roundToNDecimalPlaces(number, -2)).to.equal(2700)
        expect(roundToNDecimalPlaces(number, -3)).to.equal(3000)
    })
})
