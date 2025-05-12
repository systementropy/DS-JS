

var MyQueue = function() {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue = [...this.queue,x]
    return null
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const poppedNum = this.queue[0]
    this.queue = this.queue.splice(1,this.queue.length-1)
    return poppedNum
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const poppedNum = this.queue[0]
    return poppedNum
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.queue.length>0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */