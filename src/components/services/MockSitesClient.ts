import { ISitesListItem } from "./SPLists";

export default class MockSites {

  private static _items: ISitesListItem[] = [
    {
      Title: "Coop Restaurant Übersicht",
      Url: "http://www.example.com",
      favourite: true
    },
    {
      Title: "Coop Immobilien",
      Url: "http://www.example.com",
      favourite: false
    },
    {
      Title: "Hobby und Freizeit",
      Url: "http://www.example.com",
      favourite: false
    },
    {
      Title: "Coop Weiterbildungen",
      Url: "http://www.example.com",
      favourite: true
    },
    {
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
