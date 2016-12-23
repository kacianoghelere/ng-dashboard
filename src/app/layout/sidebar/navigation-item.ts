export class NavigationItem {

  children: NavigationItem[] = [];
  description: string = "";
  favorite: boolean = false;
  id: number;
  parent: number;
  routePath: string = "";

  public constructor(id: number, description: string, favorite: boolean,
      routePath: string, parent: number = 0) {
    this.id = id;
    this.description = description;
    this.favorite = favorite;
    this.routePath = routePath;
    this.parent = parent;
  }

  toggleFavorite() {
    this.favorite = !this.favorite;
  }
}
