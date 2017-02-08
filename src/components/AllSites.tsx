import * as React from "react";
import {
  FocusZone,
  FocusZoneDirection,
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

export class Sites extends React.Component<any, any> {

  defaultSiteType: number;

  constructor() {
    super();

    this.defaultSiteType = 4;
    this._onFilterChanged = this._onFilterChanged.bind(this);

    this.state = {
      // filterText: "",
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
        <TextField label={Translations.getByKey("Global.SearchBoxTitle") + resultCountText} value={this.state.filterText} onBeforeChange={this._onFilterChanged} />
        <List
          items={items}
          onRenderCell={(item: any) => (
            <div className="ms-font-s-plus sitesItem">
              <a href={item.Url} className="sitesLink">{item.Title}</a>
              <a onClick={this._updateFavouriteState.bind(this, item)} className="listAction">{this._getFavouriteStatus(item)}</a>
            </div>
          )}
        />
        <div className="view-actions">
          <span className="show-all" onClick={this._showAllSites.bind(this)}>{Translations.getByKey("Global.ShowAll")}</span>
        </div>
      </div>
    );
  }

  public _updateFavouriteState(item: ISitesListItem): void {

    let endpoint = "/_vti_bin/CoopSiteService.svc/favorites/siteId(" + item.SiteId + ")";

    if (item.favourite) {
      SitesClient.delete(endpoint).then((success: boolean) => {
        this._setFavouriteState(item, success);
      });
    } else {
      SitesClient.post(endpoint).then((success: boolean) => {
        this._setFavouriteState(item, success);
      });
    }
  }

  public _showAllSites(): void {

    let siteKind = this.defaultSiteType;

    if (typeof siteType === "number") {
      siteKind = siteType;
    }

    let endpoint = "/_api/search/query?querytext='contentclass:STS_Web+contentclass:STS_Site+CoopSiteType:" + siteKind + "'&selectproperties='Title,WebId,CoopSiteType,Url,CoopDisplayTitle'&rowlimit=500&sortList='CoopDisplayTitleFull:ascending'";

    SitesClient.search(endpoint, true).then((response: any) => {
      this._renderList(response, true);
    });
  }

  private _setFavouriteState(item: ISitesListItem, success: boolean) {
    if (success) {
      let index = item.Id;
      this.setState({
        items: update(this.state.items, { [index]: { favourite: { $set: !item.favourite } } })
      });
    }
  }

  private _onFilterChanged(text: string) {
    this._applyFilterOnList(text);
  }

  private _applyFilterOnList(text: string): void {

    let siteKind = this.defaultSiteType;

    if (typeof siteType === "number") {
      siteKind = siteType;
    }

    let endpoint = "/_api/search/query?querytext='contentclass:STS_Web+contentclass:STS_Site+CoopSiteType:" + siteKind + "+CoopDisplayTitleFull:" + text + "*'&selectproperties='Title,WebId,CoopSiteType,Url,CoopDisplayTitle'&rowlimit=" + (text === "" ? 30 : 500) + "&sortList='CoopDisplayTitleFull:ascending'";

    SitesClient.search(endpoint, true).then((response: any) => {
      this._renderList(response, false);
    });
  }

  private _getFavouriteStatus(item: ISitesListItem): JSX.Element {
    return item.favourite ?
      <i className="ms-Icon ms-Icon--AddFavoriteFill ms-fontColor-black ms-fontColor-white--hover"></i> :
      <i className="ms-Icon ms-Icon--AddFavorite ms-fontColor-black ms-fontColor-white--hover"></i>;
  }

  private _renderListAsync(): void {
    // Local environment
    if (typeof _spBodyOnLoadFunctionNames === "undefined") {
      // no SharePoint
      this._getMockListData().then((response) => {
        this._renderList(response.value, false);
      });
    } else {
      // SharePoint
      let siteKind = this.defaultSiteType;

      if (typeof siteType === "number") {
        siteKind = siteType;
      }

      let endpoint = "/_api/search/query?querytext='contentclass:STS_Web+contentclass:STS_Site+CoopSiteType:" + siteKind + "'&selectproperties='Title,WebId,CoopSiteType,Url,CoopDisplayTitle'&rowlimit=30&sortList='CoopDisplayTitleFull:ascending'";

      SitesClient.search(endpoint, true).then((response: any) => {
        this._renderList(response, false);
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

  private _renderList(items: ISitesListItem[], resetFilter: boolean): void {

    this.setState({
      filterText: resetFilter ? "" : undefined,
      items: items,
      allItems: items,
    });
  }
}
