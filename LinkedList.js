class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Returns an SLL of desired length with Node values corresponding to the length.
 * @param length desired length of the linked list
 */
function createSLL(length) {
    nodes = [];
    head = null;

    for(i = length; i > 0; i--) {
        node = new Node(i);
        ptr = node;

        if(i == length) {
            head = ptr;
            ptr.next = null;
        }
        else {
            ptr.next = head;
            head = ptr;
        }
    }

    return head;
}

// singlyLinkedList = createSLL(5);

function getListLength(head) {
    count = 0;
    while(head != null) {
        count++;
        head = head.next;
    }

    return count;
}

// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
// Given this linked list: 1->2->3->4->5

// For k = 2, you should return: 2->1->4->3->5

// For k = 3, you should return: 3->2->1->4->5
var reverseKGroup = function (globalHead, k) {
    var length = getListLength(globalHead);
    var multiples = Math.floor(length / k);

    return k > length ? globalHead : function() {
        debugger;
        reverseNodes = k;
        first = globalHead;
        prev = null;

        firstRound = true;
        groupHead = globalHead;
        finalHead = null;
        prevIterationLastNode = null;

        while(multiples--) {
            const { newHead, prevHead, temp } = reverseGroup(groupHead, k);
            if (!finalHead) {
                finalHead = newHead;
                prevIterationLastNode = prevHead;
            }
            if(temp) {
                prevHead.next = temp;
                groupHead = temp;
            } else if(prevIterationLastNode) {
                prevIterationLastNode.next = newHead;
            }        
            
             
        }

        return finalHead;
    }
} 

function reverseGroup(head, k) {
    debugger;
    groupLength = k-1;
    first = last = head;

    while(groupLength--) {
        last = last.next;
    }

    // last node becomes the head in the first iteration
    newHead = last;

    // the first node after the group.
    temp = last.next;

    while(first != last) {
        prev = first;

        while(prev.next != last) {
            prev = prev.next;
        }

        last.next = prev;
        last = prev;
    }

    first.next = temp;
    return { newHead: newHead, prevHead: head, temp }
}

const reverseGroupTestLL = createSLL(5);
const reversedGroup =  reverseKGroup(reverseGroupTestLL, 2);
console.log(reversedGroup());