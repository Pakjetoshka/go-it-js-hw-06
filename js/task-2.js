class Storage{
    #items;
    #itemsArrHolder;
    constructor(items){
        this.#items = items;
        this.#itemsArrHolder = [];
    }
    getItems(){
        return this.#items;
    }
    addItem(newItem){
        this.#items.push(newItem);
    }
    removeItem(itemToRemove){
        for (const elem of this.#items) {
            if (elem === itemToRemove) {
                
            }
            else
            {
                this.#itemsArrHolder.push(elem);
            }
        }
        this.#items = this.#itemsArrHolder;
         return this.#items;
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
