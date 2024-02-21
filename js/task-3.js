class StringBuilder{
    #value;
    constructor(value) {
        this.#value = value;
    }
    //value(initialValue){};
    getValue(){
        return this.#value;
    };
    padEnd(str){
        this.#value = this.#value.split("").concat(str.split("")).join("");
        return this.#value;
    };
    padStart(str){
        this.#value = str.split("").concat(this.#value.split("")).join("");
        return this.#value;
    };
    padBoth(str){
        this.#value = this.#value.split("").concat(str.split("")).join("");
        this.#value = str.split("").concat(this.#value.split("")).join("");
        return this.#value;
    };
} 

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
