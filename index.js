class TicketManager {
    #events
    #counter
    constructor(){
        this.#counter = 1
        this.#events =[]


    }

    getEvents = () => this.events


    addEvent = (id,name, stock, price ,size) => {
        const id = this.#counter++
        this.#events.push({id,name, stock, price, size})
    }
}

const ticketManager = new TicketManager()
ticketManager.addEvent('short','52',5000,3)

console.log(ticketManager.getEvents())