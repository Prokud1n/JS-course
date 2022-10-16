import { LinkedList} from "./linked-list";

test('linked-list adding values', () => {
    const list = new LinkedList();

    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.first.value).toBe(1);
    expect(list.last.value).toBe(3);
    expect(list.first.next.value).toBe(2);
    expect(list.first.next.prev.value).toBe(1);
});