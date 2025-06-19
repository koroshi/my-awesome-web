class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    // 创建虚拟头节点，简化边界情况处理
    const dummy = new ListNode(0);
    dummy.next = head;
    
    // 初始化快慢指针
    let fast = dummy;
    let slow = dummy;
    
    // 快指针先移动n+1步
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
        console.log(`Fast pointer moved to: ${fast ? fast.val : 'null'}`);
    }
    
    // 快慢指针同时移动，直到快指针到达末尾
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
        console.log(`Fast pointer at: ${fast ? fast.val : 'null'}, Slow pointer at: ${slow.val}`);
    }
    
    // 删除倒数第n个节点
    slow.next = slow.next.next;
    
    // 返回头节点
    return dummy.next;
}

// 辅助函数：将数组转换为链表
function arrayToList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// 辅助函数：将链表转换为数组
function listToArray(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// 测试示例
const head = arrayToList([1, 2, 3, 4, 5]);
const n = 4;
const newHead = removeNthFromEnd(head, n);
console.log(listToArray(newHead)); // 输出: [1, 2, 3, 5]
