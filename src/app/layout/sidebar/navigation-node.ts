export class NavigationNode {

  children: NavigationNode[] = [];
  description: string = "";
  expanded: boolean = false;
  favorite: boolean = false;
  id: number;
  parent: number;
  routePath: string = "";

  public constructor(id: number = null, description: string = "",
      favorite: boolean = false, routePath: string = "",
      parent: number = null) {
    this.id = id;
    this.description = description;
    this.favorite = favorite;
    this.routePath = routePath;
    this.parent = parent;
  }
}
