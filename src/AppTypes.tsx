enum routeGroups {
  misc = "Misc",
  hex = "Hex Board",
  example = "Example",
  dbMan = "DBMan",
}

export type groupTag = keyof typeof routeGroups;
export const routeGroupList: groupTag[] = Object.keys(routeGroups) as groupTag[];

export type routeType = {
    path: string;
    element: JSX.Element;
    displayName: string;
    font?: string;
    uid: number;
    group: groupTag;
    tagz?: string;
  }