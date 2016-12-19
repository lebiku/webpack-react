import { ISPLists } from "./SPLists";
import { ISPList } from "./SPLists";
import * as pnp from "sp-pnp-js";

import "whatwg-fetch";
// what a comment
export default class SharepointListClient {

  public static get(restUrl: string, options?: any): Promise<ISPList[]> {

    return new Promise<ISPList[]>((resolve: any) => {
      pnp.setup({
        headers: {
          "Accept": "application/json; odata=verbose",
        },
      });

      pnp.sp.web.lists.get().then((response: any) => {

        let items: ISPList[] = [];

        response.forEach(function (item: any) {
          items.push({ Title: item.Title, Id: item.Id });

        });

        resolve(items);
      });
    });
  }
}
