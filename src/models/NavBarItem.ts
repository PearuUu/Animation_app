export default class NavBarItem
{
    Title: string = "";
    Path: string = "";
    SubItems: NavBarItem[] = [];

    constructor(obj: Partial<NavBarItem>)
    {
        Object.assign(this, obj);
    }
}