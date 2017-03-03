import * as React from "react";
// import { css } from 'office-ui-fabric-react';
import "office-ui-fabric-react/dist/css/fabric.min.css";

import { ISPLists, ISPList } from "./services/SPLists";
import MockHttpClient from "./services/MockHttpClient";
import SharepointListClient from "./services/SharepointListClient";

export interface HomeProps { compiler: string; framework: string; }

export class Home extends React.Component<HomeProps, {}> {
  render() {

    this._renderListAsync();

    return <div>
      <h1 className="myRed">Hello React!<i className="ms-Icon ms-Icon--Like myIcon" aria-hidden="true"></i></h1>
      <div id="spListContainer" />
    </div>;
  }

  private _renderListAsync(): void {
    // Local environment
    if (typeof _spBodyOnLoadFunctionNames === "undefined") {
      // no SharePoint
      this._getMockListData().then((response) => {
        this._renderList(response.value);
      });
    } else {
      // SharePoint
      SharepointListClient.get("").then((response) => {
        this._renderList(response);
      });
    }
  }

  private _getMockListData(): Promise<ISPLists> {
    return MockHttpClient.get("mockUrl")
      .then((data: ISPList[]) => {
        let listData: ISPLists = { value: data };
        return listData;
      }) as Promise<ISPLists>;
  }

  private _renderList(items: ISPList[]): void {
    let html: string = "";
    items.forEach((item: ISPList) => {
      html += `
            <ul class="myList">
                <li class="">
                    <span class="ms-font-l">${item.Title}</span>
                </li>
            </ul>`;
    });

    let listContainer = document.getElementById("spListContainer");
    listContainer.innerHTML = html;
  }
}
