import * as React from "react";
import {
  FocusZone,
  FocusZoneDirection,
  TextField,
  List
} from "office-ui-fabric-react";
import { css } from "office-ui-fabric-react/lib/utilities/css";
import { getRTL } from "office-ui-fabric-react/lib/utilities/rtl";

import { ISitesList, ISitesListItem } from "./services/SPLists";
import MockSites from "./services/MockSitesClient";
import SitesClient from "./services/SitesClient";

// export interface IListBasicExampleProps {
//   items: any[];
// }

export interface IListBasicExampleState {
  filterText?: string;
  items?: any[];
  allItems?: any[];
}

export class Sites extends React.Component<any, any> {
  constructor() {
    super();

    this._onFilterChanged = this._onFilterChanged.bind(this);

    this.state = {
      filterText: "",
      items: [],
      allItems: []
    };
  }

  public componentDidMount() {
    this._renderListAsync();
  }

  public render() {
    let { allItems } = this.state;
    let { items } = this.state;
    let resultCountText = items.length === allItems.length ? "" : ` (${items.length} of ${allItems.length} shown)`;

    return (
      <div>
        <FocusZone direction={FocusZoneDirection.vertical}>
        <TextField label={"Suchbegriff eingeben: " + resultCountText} onBeforeChange={this._onFilterChanged} />
        <List
          items={items}
          onRenderCell={(item: any, index: any) => (
            <div className="ms-font-l sitesItem" data-is-focusable={true}>
              <a href={item.Url} className="sitesLink">{item.Title}</a>
              <a onClick={this._onLinkClick.bind(this, item)} className="listAction">{this._getFavouriteStatus(item)}</a>
            </div>
          )}
          />
          </FocusZone>
      </div>
    );
  }

  public _onLinkClick(item: ISitesListItem): void {
    let postfix = item.favourite ? "I like " : "Not yet liked ";

    alert(postfix + "'" + item.Title + "'");
  }

  private _onFilterChanged(text: string) {
    let { items, allItems } = this.state;

    this.setState({
      filterText: text,
      items: text ?
        allItems.filter((item: any) => item.Title.toLowerCase().indexOf(text.toLowerCase()) >= 0) :
        allItems
    });
  }

  private _getFavouriteStatus(item: ISitesListItem): JSX.Element {
    return item.favourite ? <i className="ms-Icon ms-Icon--HeartFill ms-fontColor-red"></i> : <i className="ms-Icon ms-Icon--Heart ms-fontColor-red"></i>;
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
      SitesClient.get("").then((response: any) => {
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
      filterText: "",
      items: items,
      allItems: items
    });
  }
}
