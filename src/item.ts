export class Item {
    constructor(private name: string, private price: number) {
    }

    public say(elm: HTMLElement | null): void {
        if (elm) {
            elm.innerHTML = '署名' + this.name + '価格' + this.price;
        }
    }
}