import { VIEW, AXIS } from '../src';

describe('Package exports', (): void => {

    it('VIEW', (): void => {
        const enumKeysValues = ['top', 'front', 'side'];
        expect(Object.keys(VIEW)).toEqual(enumKeysValues);
        expect(Object.values(VIEW)).toEqual(enumKeysValues);
    });

    it('AXIS', (): void => {
        const enumKeysValues = ['right', 'left', 'top'];
        expect(Object.keys(AXIS)).toEqual(enumKeysValues);
        expect(Object.values(AXIS)).toEqual(enumKeysValues);
    });

});