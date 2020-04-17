interface Cloneable<T> {
    clone: () => T;
}

class Component implements Cloneable<Component> {
    public prop1: any;
    private prop2: any;

    constructor(initProms: {prop2: any}) {
        this.prop2 = initProms.prop2;
    }

    public clone(): Component {
        const initParams: {prop2: any} = {
            prop2: this.prop2
        };
        const clone = new Component(initParams);    // Прокидивыем параметры инициализации через конструктор для Private свойств

        clone.prop1 = this.prop1;   // Можем менять Public свойтсва

        return clone;
    }

}


/********************** Использование **********************/

const initParams: any = {
    prop2: 2,
};
const component: Component = new Component(initParams);

const componentLink: Component = component;
console.log(component === componentLink);   // true

const componentClone: Component = component.clone();
console.log(component === componentClone);  // false


/* BAD CODE */
const componentBCExample: Component = new Component(initParams);
const componentCloneBCExample1: Component = {...componentBCExample};
const componentCloneBCExample2: Component = Object.assign({}, componentBCExample);
