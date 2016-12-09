import {
    DocumentCard,
    DocumentCardPreview,
    DocumentCardTitle,
    DocumentCardActivity,
    IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';

import * as React from 'react';
//import { css } from 'office-ui-fabric-react';
import 'office-ui-fabric-react/dist/css/fabric.min.css' 

import { ISPLists, ISPList } from './services/SPLists';
import MockHttpClient from './services/MockHttpClient';
import SharepointListClient from './services/SharepointListClient';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {

    let previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
          url: 'http://bing.com',
          previewImageSrc: 'http://localhost:3000/images/document-preview.png',
          iconSrc: 'http://localhost:3000/images/icon-ppt.png',
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        }
      ],
    };

    this._renderListAsync();

    let divStyle = {
        margin: "25px",
    }

    return <div>   
                <h1>Hi from {this.props.compiler} and {this.props.framework}!</h1>
                <h1>fly kusi fly!<i className="ms-Icon ms-Icon--Airplane" style={divStyle} aria-hidden="true"></i></h1>
                <div>
                    <DocumentCard onClickHref='http://bing.com'>
                        <DocumentCardPreview { ...previewProps } />
                        <DocumentCardTitle
                            title='Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_it_needs_truncating.pptx'
                            shouldTruncate={ true } />
                            <DocumentCardActivity
                                activity='Created a few minutes ago'
                                people={
                                [
                                    { name: 'Annie Lindqvist', profileImageSrc: 'http://localhost:3000/images/avatar-kat.png' }
                                ]
                            }
                        />
                    </DocumentCard>
                </div> 
                <div id="spListContainer" />
            </div>;
    }

    private _renderListAsync(): void {
    // Local environment
        if (typeof _spBodyOnLoadFunctionNames === 'undefined') {
            // no SharePoint
            this._getMockListData().then((response) => {
                this._renderList(response.value);
            }); 
        } else {
            // SharePoint
            SharepointListClient.get("").then((response) =>{
                this._renderList(response);
            });
        } 
    }

    private _getMockListData(): Promise<ISPLists> {
    return MockHttpClient.get("mockUrl")
        .then((data: ISPList[]) => {
             var listData: ISPLists = { value: data };
             return listData;
         }) as Promise<ISPLists>;
    }

    private _renderList(items: ISPList[]): void {
        let html: string = '';
        items.forEach((item: ISPList) => {
            html += `
            <ul class="">
                <li class="">
                    <span class="ms-font-l">${item.Title}</span>
                </li>
            </ul>`;
        });
        
        let listContainer = document.getElementById('spListContainer');
        listContainer.innerHTML = html;
    }
}