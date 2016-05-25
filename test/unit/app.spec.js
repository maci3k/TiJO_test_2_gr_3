describe('app', function ()
{
    'use strict';

    var exercise = window.app;

    describe('upperCase', function () {
        it('should converts the first letter each word in upper case', function () {
            expect(exercise.upperCase('This is a sentence')).toBe('This Is A Sentence');
            expect(exercise.upperCase('maciej klimczyk wrote this test')).toBe('Maciej Klimczyk Wrote This Test');
        });
        it('should not change upper case letter', function () {
            expect(exercise.upperCase('ThisIs Hard')).toBe('ThisIs Hard');
            expect(exercise.upperCase('Maciej Klimczyk Wrote This Test')).toBe('Maciej Klimczyk Wrote This Test');
        });
        it('should not change punctuation', function () {
            expect(exercise.upperCase('This is,m Hard')).toBe('This Is,m Hard');
            expect(exercise.upperCase('Maciej k,limczyk')).toBe('Maciej K,limczyk');
        });
    });

    describe('findAlmostMax', function () {
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([2, 3, 4])).toBe(3);
            expect(exercise.findAlmostMax([5, 5, 6])).toBe(5);
        });
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([50, 40, 30, 10])).toBe(40);
            expect(exercise.findAlmostMax([10, 20, 100, 9])).toBe(20);
        });
        it('string should be omnitted', function () {
            expect(exercise.findAlmostMax([50, 'str', 30, 10])).toBe(30);
            expect(exercise.findAlmostMax([347, 'ala', 124, 10])).toBe(124);
        });
        it('empty array should return false', function () {
            expect(exercise.findAlmostMax([])).toEqual(false);
            expect(exercise.findAlmostMax([[]])).toBeFalsy();
        });
        it('array of string should return false', function () {
            expect(exercise.findAlmostMax(['cat', 'kot'])).toEqual(false);
            expect(exercise.findAlmostMax(['10', '20', '30'])).not.toBeTruthy();
        });
    });
});
