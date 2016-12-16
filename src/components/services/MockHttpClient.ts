import { ISPList } from './SPLists';
import {Promise} from 'core-js';

//import Promise = require("bluebird");

export default class MockHttpClient {

    private static _items: ISPList[] = [{ Title: 'Mock List', Id: '1' }, {Title: 'Mock List 2', Id: '2' }];
    
    public static get(restUrl: string, options?: any): Promise<ISPList[]> {
    return new Promise<ISPList[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
}
