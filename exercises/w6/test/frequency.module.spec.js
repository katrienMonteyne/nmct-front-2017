import * as freq from '../src/js/frequency.module';

describe('Frequency module', () => {

    it('should exist', () => {
        expect(freq).toBeDefined();
    })

    it("should contain a 'calculateFrequency' method", () => {
        expect(freq.calculateFrequency).toBeDefined();
    })

    it("should result in 116 when the 'calculateFrequency' method is called with startKey is 110", () => {
        freq.setStartKey(110);
        let result = freq.calculateFrequency(1);
        expect(Math.floor(result)).toBe(116);
    })
})