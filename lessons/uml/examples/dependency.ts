class A {
    doSomeThing(b: B): any {
        return b.doIt();
    }
}

class B {
    doIt(): any {
        return null;
    }
}
