import * as React from "react";
import { Button } from 'office-ui-fabric-react/lib/Button';

import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  ImageFit
} from 'office-ui-fabric-react';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {

    let previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
          url: 'http://bing.com',
          previewImageSrc: './dist/images/document-preview.png',
          iconSrc: './dist/images/icon-ppt.png',
          imageFit: ImageFit.cover,
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        }
      ],
    };

    return <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <div><Button>I am a button.</Button></div>
                <DocumentCard onClickHref='http://bing.com'>
                    <DocumentCardPreview { ...previewProps } />
                    <DocumentCardTitle
                        title='Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_it_needs_truncating.pptx'
                        shouldTruncate={ true } />
                        <DocumentCardActivity
                            activity='Created a few minutes ago'
                            people={
                            [
                                { name: 'Annie Lindqvist', profileImageSrc: './dist/images/avatar-kat.png' }
                            ]
                        }
                    />
                </DocumentCard>               
            </div>;
    }
}