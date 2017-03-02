import { ISitesListItem } from "./SPLists";

export default class MockSites {

  private static _items: ISitesListItem[] = [
    {
      Id: 0,
      Title: "Coop Restaurant Übersicht",
      SiteId: "00000000-0000-0000-0000-000000000000",
      Url: "http://www.example.com",
      favourite: true
    },
    {
      Id: 1,
      Title: "Coop Immobilien",
      SiteId: "00000000-0000-0000-0000-000000000000",
      Url: "http://www.example.com",
      favourite: false
    },
    {
      Id: 2,
      Title: "Hobby und Freizeit",
      SiteId: "00000000-0000-0000-0000-000000000000",
      Url: "http://www.example.com",
      favourite: false
    },
    {
      Id: 3,
      Title: "Coop Weiterbildungen",
      SiteId: "00000000-0000-0000-0000-000000000000",
      Url: "http://www.example.com",
      favourite: true
    },
    {
      Id: 4,
      Title: "Hello Family Club",
      SiteId: "00000000-0000-0000-0000-000000000000",
      Url: "http://www.example.com",
      favourite: false
    }
  ];

  public static get(restUrl: string, options?: any): Promise<ISitesListItem[]> {
    return new Promise<ISitesListItem[]>((resolve: any) => {
      resolve(MockSites._items);
    });
  }
}
