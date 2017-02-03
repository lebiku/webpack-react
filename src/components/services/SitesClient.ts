import { ISitesListItem, ISitesList } from "./SPLists";

export default class SitesClient {

  public static get(endpoint: string, allSites: boolean, options?: any): Promise<ISitesList[]> {

    return new Promise<ISitesList[]>((resolve: any) => {
      let url = _spPageContextInfo.webAbsoluteUrl + endpoint;

      fetch(url, {
        headers: new Headers({
          "accept": "application/json;odata=verbose",
          "Content-Type": "application/json"
        }),
        credentials: "include"
      }).then(function (response) {
        if (response.ok) {

          let data = response.json();
          data.then(result => {
            let items: ISitesListItem[] = [];

            result.forEach(function (item: any, index: number) {
              items.push({ Id: item.Id, Title: (allSites ? item.DisplayTitle : item.Title), SiteId: item.SiteId, Url: item.Url, favourite: item.IsFavorite });
            });

            resolve(items);
          });
        } else {
          console.log("Network response was not ok.");
        }
      })
        .catch(function (error) {
          console.log("There has been a problem with your fetch operation: " + error.message);
        });
    });
  }

  public static delete(endpoint: string, options?: any): Promise<boolean> {

    return new Promise<boolean>((resolve: any) => {
      let url = _spPageContextInfo.webAbsoluteUrl + endpoint;

      fetch(url, {
        method: "delete",
        headers: new Headers({
          "accept": "application/json;odata=verbose",
          "Content-Type": "application/json"
        }),
        credentials: "include"
      }).then(function (response) {
        if (response.ok) {
          resolve(true);
        } else {
          console.log("Network response was not ok.");
          resolve(false);
        }
      })
        .catch(function (error) {
          console.log("There has been a problem with your fetch operation: " + error.message);
          resolve(false);
        });
    });
  }
}
