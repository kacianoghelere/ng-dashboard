export class NavigationItem {

  child: NavigationItem[] = [];
  description: string = "";
  favorite: boolean = false;
  id: number;
  routePath: string = "";

  public constructor(id: number, description: string, favorite: boolean,
      routePath: string) {
    this.id = id;
    this.description = description;
    this.favorite = favorite;
    this.routePath = routePath;
  }

  toggleFavorite() {
    this.favorite = !this.favorite;
  }
}
