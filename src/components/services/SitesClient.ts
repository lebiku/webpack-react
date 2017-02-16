import { ISitesListItem, ISitesList } from "./SPLists";

import "isomorphic-fetch";

export default class SitesClient {

  public static get(endpoint: string, allSites: boolean, options?: any): Promise<ISitesList[]> {

    return new Promise<ISitesList[]>((resolve: any) => {
      let url = _spPageContextInfo.webAbsoluteUrl + endpoint;

      return fetch(url, {
        headers: new Headers({
          "accept": "application/json;odata=verbose",
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store",
          "Pragma": "no-cache",
        }),
        credentials: "include"
      }).then(function (response) {
        if (response.ok) {

          let data = response.json();
          data.then(result => {
            let items: ISitesListItem[] = [];

            result.forEach(function (item: any, index: number) {
              items.push({ Id: index, Title: item.DisplayTitle, SiteId: item.SiteId, Url: item.Url, favourite: item.IsFavorite });
            });

            resolve(items);
          });

          return data;

        } else {
          console.log("Network response was not ok.");
        }
      })
        .catch(function (error) {
          console.log("There has been a problem with your fetch operation: " + error.message);
        });
    });
  }

  public static search(endpoint: string, allSites: boolean, options?: any): Promise<ISitesList[]> {

    return new Promise<ISitesList[]>((resolve: any) => {
      let url = _spPageContextInfo.webAbsoluteUrl + endpoint;

      return fetch(url, {
        headers: new Headers({
          "accept": "application/json;odata=verbose",
          "Content-Type": "application/json"
        }),
        credentials: "include"
      }).then(function (response) {
        if (response.ok) {

          let data = response.json();
          data.then(jsonObject => {
            let items: ISitesListItem[] = [];
            let relevantResults = jsonObject.d.query.PrimaryQueryResult.RelevantResults;

            let rowsCount = relevantResults.RowCount;
            let totalRowsCount = relevantResults.TotalRowsIncludingDuplicates;

            let maxReached = rowsCount === totalRowsCount;

            let results = relevantResults.Table.Rows.results;

            results.forEach(function (item: any, index: number) {
              items.push({ Id: index, Title: item.Cells.results[6].Value, SiteId: item.Cells.results[3].Value.replace(/['{}]+/g, ""), Url: item.Cells.results[5].Value, favourite: item.IsFavorite });
            });

            resolve([items, maxReached]);
          });

          return data;

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

      return fetch(url, {
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

    public static post(endpoint: string, options?: any): Promise<boolean> {

    return new Promise<boolean>((resolve: any) => {
      let url = _spPageContextInfo.webAbsoluteUrl + endpoint;

      return fetch(url, {
        method: "post",
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
