import { ISPLists } from './SPLists';
import { ISPList } from './SPLists';
import * as pnp from 'sp-pnp-js';
import { Promise } from 'core-js';

export default class SharepointListClient {
  
    public static get(restUrl: string, options?: any): Promise<ISPList[]> {
        
        pnp.setup({  
            headers: {  
                "Accept": "application/json; odata=verbose",  
            },  
        });

        return pnp.sp.web.lists.get().then((response: any) => {

            let items: ISPList[] = [];

        //itresponse.forEach(function (item) {
        //    html += "\n            <ul class=\"\">\n                <li class=\"\">\n                    <span class=\"ms-font-l\">" + item.Title + "</span>\n                </li>\n            </ul>";
        //});

            response.forEach(function (item: any){

                items.push({ Title: item.Title, Id: item.Id });

            });

            return items;
        });
    }
}