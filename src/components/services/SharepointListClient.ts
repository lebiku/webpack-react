import { ISPLists } from './SPLists';
import { ISPList } from './SPLists';
import * as pnp from 'sp-pnp-js';
//import { Promise } from 'core-js';
//import 'isomorphic-fetch';

export default class SharepointListClient {
  
    private static _items: ISPList[] = [{ Title: 'Mock List SP', Id: '1' }, {Title: 'Mock List SP 2', Id: '2' }];

    public static get(restUrl: string, options?: any): Promise<ISPList[]> {

         return new Promise<ISPList[]>((resolve) => {
            resolve(SharepointListClient._items);
        });
    

        // pnp.setup({  
        //     headers: {  
        //         "Accept": "application/json; odata=verbose",  
        //     },  
        // });

        // return pnp.sp.web.lists.get().then((response: any) => {

        //     let items: ISPList[] = [];

        //     response.forEach(function (item: any){

        //         items.push({ Title: item.Title, Id: item.Id });

        //     });

        //     return items;
        // });
    }
}
