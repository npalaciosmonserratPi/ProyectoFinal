export class MenuItemModel {
    name: string;
    icon: string;
    path: string;
    childItems: MenuItemModel[];

    constructor(name: string, icon: string, path: string, childItems = []) {
        this.name = name;
        this.icon = icon;
        this.path = path;
        this.childItems = childItems;
    }
}