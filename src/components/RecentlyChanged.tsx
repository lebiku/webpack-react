import * as React from "react";
import {
  List
} from "office-ui-fabric-react";
import { css } from "office-ui-fabric-react/lib/utilities/css";

import { ISitesList, ISitesListItem } from "./services/SPLists";
import MockSites from "./services/MockSitesClient";
import SitesClient from "./services/SitesClient";

declare var _spBodyOnLoadFunctionNames: any;

export class RecentlyChanged extends React.Component<any, any> {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  public componentDidMount() {
    this._renderListAsync();
  }

  public render() {
    let { items } = this.state;

    return (
      <div className="view-container">
        <List
          items={items}
          onRenderCell={(item: any) => (
            <div className="ms-font-s-plus sitesItem">
              <a href={item.Url} className="sitesLink">{item.Title}</a>
            </div>
          )}
          />
      </div>
    );
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
      SitesClient.get("/_vti_bin/CoopSiteService.svc/mostRecentlyUsed", false).then((response: any) => {
        this._renderList(response);
      });
    }
  }

  private _getMockListData(): Promise<ISitesList> {
    return MockSites.get("")
      .then((data: ISitesListItem[]) => {
        let listData: ISitesList = { value: data };
        return listData;
      }) as Promise<ISitesList>;
  }

  private _renderList(items: ISitesListItem[]): void {

    this.setState({
      items: items
    });
  }
}
