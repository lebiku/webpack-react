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

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {

    let previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
          url: 'http://bing.com',
          previewImageSrc: './images/document-preview.png',
          iconSrc: './images/icon-ppt.png',
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        }
      ],
    };

    return <div>   
                <h1>Hi from {this.props.compiler} and {this.props.framework}!</h1>
                <h1>drive kusi drive!<i className="ms-Icon ms-Icon--Car" aria-hidden="true"></i></h1>

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
                                    { name: 'Annie Lindqvist', profileImageSrc: './images/avatar-kat.png' }
                                ]
                            }
                        />
                    </DocumentCard>
                </div>               
            </div>;
    }
}