import { ISPLists } from './SPLists';
import pnp from 'sp-pnp-js';
import {Promise} from 'core-js';

export default class SharepointListClient {
  
    public static get(restUrl: string, options?: any): Promise<ISPLists> {
        return pnp.sp.web.lists.filter("Hidden eq false").get().then((response: Response) => {
            return response.json();
        });
    }
}