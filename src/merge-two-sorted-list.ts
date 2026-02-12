import utils = require("openai/internal/qs/utils.mjs");

type ListNode = {
    key: number,
    next: ListNode | null
}

class SinglyLinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(value: number): void {
        const listNode: ListNode = {
            key: value,
            next: null
        }
        if (this.tail === null) {
            this.head = listNode;
            this.tail = listNode;
        }
        else {
            this.tail.next = listNode;
            this.tail = listNode;
        }
    }

    search(value: number): ListNode | null {
        let x: typeof this.head = this.head;
        while (x !== null && x.key !== value) {
            x = x.next;
        }
        return x;
    }

    delete(value: number): ListNode | null {
        const nodeToDelete = this.search(value)
        if (nodeToDelete === null) {
            console.log("The Node with the given value not found!..");
            return null;
        }
        if (nodeToDelete === this.head) {
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            }
            else {
                this.head = this.head.next;
            }
            return nodeToDelete;
        }
        let x = this.head;
        while(x!.next !== nodeToDelete) {
            x = x!.next;
        }
        x!.next = nodeToDelete.next;
        return nodeToDelete;
    }
}

function mergeTwoLists(list1: SinglyLinkedList, list2: SinglyLinkedList): ListNode | null {
    const mergedList: SinglyLinkedList = new SinglyLinkedList();
    let node1: ListNode | null = list1.head;
    let node2: ListNode | null = list2.head;
    while(node1 !== null && node2 !== null) {
        if (node1.key <= node2.key) {
            mergedList.insert(node1.key);
            node1 = node1.next;
        }
        else {
            mergedList.insert(node2.key);
            node2 = node2.next;
        }
    }
    if (node1 === null) {
        while(node2 !== null) {
            mergedList.insert(node2.key);
            node2 = node2.next;
        }
    }
    if (node2 === null) {
        while (node1 !== null) {
            mergedList.insert(node1.key);
            node1 = node1.next;
        }
    }
    return mergedList.head;
}

const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList();
list1.insert(1);
list1.insert(2);
list1.insert(4);
list2.insert(1);
list2.insert(3);
list2.insert(4);
const list3 = new SinglyLinkedList();
const list4 = new SinglyLinkedList();
const list5 = new SinglyLinkedList();
const list6 = new SinglyLinkedList();
list6.insert(0);
console.log(mergeTwoLists(list1, list2));
console.log(mergeTwoLists(list3, list4));
console.log(mergeTwoLists(list5, list6));