import * as React from "react";
import {
  TextField,
  List
} from "office-ui-fabric-react";
import { css } from "office-ui-fabric-react/lib/utilities/css";
import { getRTL } from "office-ui-fabric-react/lib/utilities/rtl";

import { ISitesList, ISitesListItem } from "./services/SPLists";
import MockSites from "./services/MockSitesClient";
import SitesClient from "./services/SitesClient";
import * as update from  "immutability-helper";

export class Favourites extends React.Component<any, any> {
  constructor() {
    super();

    this._onFilterChanged = this._onFilterChanged.bind(this);

    this.state = {
      filterText: "",
      items: [],
      allItems: [],
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
      <div className="view-container">
        <TextField label={"Suchbegriff eingeben: " + resultCountText} onBeforeChange={this._onFilterChanged} />
        <List
          items={items}
          onRenderCell={(item: any) => (
            <div className="ms-font-l sitesItem">
              <a href={item.Url} className="sitesLink">{item.Title}</a>
              <a onClick={this._removeFavourite.bind(this, item)} className="listAction"><i className="ms-Icon ms-Icon--Cancel ms-fontColor-black ms-fontColor-white--hover"></i></a>
            </div>
          )}
          />
          <div className="view-actions">
            <a href="#" className="show-all">alle anzeigen</a>
          </div>
      </div>
    );
  }

  public _removeFavourite(item: ISitesListItem): void {

    // Todo: call Rest API to remove Favourite
    let { items } = this.state;
    let indexOfItem = items.indexOf(item);

    this.setState({
       items: update(this.state.items, {$splice: [[indexOfItem, 1]]}),
       allItems: update(this.state.items, {$splice: [[indexOfItem, 1]]}),
    });
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
      allItems: items,
    });
  }
}
