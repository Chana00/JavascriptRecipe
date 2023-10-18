class Singleton {
    constructor() {
        if (Singleton.instance) {
            return console.warn("이미 인스턴스가 존재합니다.")
        }
        Singleton.instance = this;
        this.version = Date.now();
        this.config = "TEST";
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}

const s1 = Singleton.getInstance();
console.log(s1)
const s2 = Singleton.getInstance();
console.log(s2)

console.log(s1 === s2)