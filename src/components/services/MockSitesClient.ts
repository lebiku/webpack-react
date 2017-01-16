import { ISitesListItem } from "./SPLists";

export default class MockSites {

  private static _items: ISitesListItem[] = [
    {
      Id: 0,
      Title: "Coop Restaurant Übersicht",
      Url: "http://www.example.com",
      favourite: true
    },
    {
      Id: 1,
      Title: "Coop Immobilien",
      Url: "http://www.example.com",
      favourite: false
    },
    {
      Id: 2,
      Title: "Hobby und Freizeit",
      Url: "http://www.example.com",
      favourite: false
    },
    {
      Id: 3,
      Title: "Coop Weiterbildungen",
      Url: "http://www.example.com",
      favourite: true
    },
    {
      Id: 4,
      Title: "Hello Family Club",
      Url: "http://www.example.com",
      favourite: false
    }
  ];

  public static get(restUrl: string, options?: any): Promise<ISitesListItem[]> {
    return new Promise<ISitesListItem[]>((resolve) => {
      resolve(MockSites._items);
    });
  }
}
