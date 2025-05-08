function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}

let list1 = new ListNode(1);
const l3 = new ListNode(2);
const l4 = new ListNode(4);
list1.next = l3;
l3.next = l4;

let list2 = new ListNode(1);
const l5 = new ListNode(3);
const l6 = new ListNode(4);
list2.next = l5;
l5.next = l6;

// console.log(list1, list2);

let outputList = '';

const mergeSortedList = (l1, l2) => {
	let outputList = new ListNode(0);
    let tempNode = outputList;

    while(list1 && list2){
        if(list1.val <= list2.val){
            outputList.next = list1;
            list1 = list1.next;
        }else{
            outputList.next = list2;
            list2 = list2.next;
        }
        outputList = outputList.next
    }
    outputList.next = list1 || list2
    return tempNode.next;
}

console.log(JSON.stringify(mergeSortedList(list1, list2)))