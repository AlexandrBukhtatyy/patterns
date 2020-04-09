class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}

/** Пример **/
const singleTonLinkOne = Singleton.getInstance();
const singleTonLinkTwo = Singleton.getInstance();
console.log(singleTonLinkOne === singleTonLinkTwo); // true
