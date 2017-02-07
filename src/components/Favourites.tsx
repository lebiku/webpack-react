import * as React from "react";
import {
  TextField,
  List
} from "office-ui-fabric-react";
import { css } from "office-ui-fabric-react/lib/utilities/css";

import { ISitesList, ISitesListItem } from "./services/SPLists";
import MockSites from "./services/MockSitesClient";
import SitesClient from "./services/SitesClient";
import * as update from "immutability-helper";

import { Translations } from "./locales/data";

declare var siteType: number;

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
        <TextField label={Translations.getByKey("Global.SearchBoxTitle") + resultCountText} onBeforeChange={this._onFilterChanged} />
        <List
          items={items}
          onRenderCell={(item: any) => (
            <div className="ms-font-s-plus sitesItem">
              <a href={item.Url} className="sitesLink">{item.Title}</a>
              <a onClick={this._removeFavourite.bind(this, item)} className="listAction"><i className="ms-Icon ms-Icon--Cancel ms-fontColor-black ms-fontColor-white--hover"></i></a>
            </div>
          )}
        />
        <div className="view-actions">
          <span className="show-all" onClick={this._showAllSites.bind(this)}>{Translations.getByKey("Global.ShowAll")}</span>
        </div>
      </div>
    );
  }


  public _showAllSites(): void {

    let endpoint = "/_vti_bin/CoopSiteService.svc/favorites";

    SitesClient.get(endpoint, false).then((response: any) => {
      this._renderList(response);
    });
  }

  public _removeFavourite(item: ISitesListItem): void {

    // Todo: call Rest API to remove Favourite
    let endpoint = "/_vti_bin/CoopSiteService.svc/favorites/siteId(" + item.SiteId + ")";
    SitesClient.delete(endpoint).then((success: boolean) => {
      if (success) {
        let { items } = this.state;
        let indexOfItem = items.indexOf(item);

        this.setState({
          items: update(this.state.items, { $splice: [[indexOfItem, 1]] }),
          allItems: update(this.state.items, { $splice: [[indexOfItem, 1]] }),
        });
      }
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
      let siteKind = 10;

      if (typeof siteType === "number") {
        siteKind = siteType;
      }

      let endpoint = "/_vti_bin/CoopSiteService.svc/favorites/bySiteType(" + siteKind + ")";

      SitesClient.get(endpoint, false).then((response: any) => {
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
