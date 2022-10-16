import { Structure } from "./structure";

test('Structure', () => {
    const jackBlack = new Structure(['name', 'lastName', 'age']);

    jackBlack.set('name', 'Jack');
    jackBlack.set('lastName', 'Black');
    jackBlack.set('age', 53);

    expect(jackBlack.get('name')).toBe('Jack');
    expect(jackBlack.get('lastName')).toBe('Black');
    expect(jackBlack.get('age')).toBe(53);
});