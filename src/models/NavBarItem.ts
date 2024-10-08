export default class NavBarItem{
    Title: string = "";
    SubItems: NavBarItem[] = [];

    constructor(obj: Partial<NavBarItem>){
        Object.assign(this, obj);
    }
}