import { HashMap } from "./";

test('linked-list adding values', () => {
    const map = new HashMap();

    map.set('foo', 'bar');
    map.set(10, 'bla');

    expect(map.get('foo')).toBe('bar');
    expect(map.get(10)).toBe('bla');
});