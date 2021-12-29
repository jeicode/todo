

class Task{

    constructor(text, complete = false){
        this.id = new Date().valueOf();
        this.text = text.trim()
        this.complete = complete

    }
}


export {Task};