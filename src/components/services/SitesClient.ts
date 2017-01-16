import { ISitesListItem, ISitesList } from "./SPLists";

export default class SitesClient {

  public static get(options?: any): Promise<ISitesList[]> {

    return new Promise<ISitesList[]>((resolve: any) => {
      let url = _spPageContextInfo.webAbsoluteUrl + "/_api/social.following/my/followed(types=14)";

       fetch(url, {
          headers : new Headers({
            "accept": "application/json;odata=verbose",
            "Content-Type": "application/json"
          }),
          credentials: "include"
         }).then(function (response) {
         if (response.ok) {

           let data = response.json();
           data.then(result => {
             let items: ISitesListItem[] = [];

             result.d.Followed.results.forEach(function (item: any, index: number) {
               items.push({ Id: index, Title: item.Name, Url: item.ContentUri, favourite: true });
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
}
