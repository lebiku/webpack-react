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

declare var siteType: number;

export class Sites extends React.Component<any, any> {

  defaultSiteType: number;

  constructor() {
    super();

    this.defaultSiteType = 10;
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
              <a onClick={this._updateFavouriteState.bind(this, item)} className="listAction">{this._getFavouriteStatus(item)}</a>
            </div>
          )}
        />
        <div className="view-actions">
          <span className="show-all" onClick={this._showAllSites.bind(this)}>alle anzeigen</span>
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

    let endpoint = "/_vti_bin/CoopSiteService.svc/sites/siteType(" + siteKind + ")/rowLimit(0)/filter(null)";

    SitesClient.get(endpoint, true).then((response: any) => {
      this._renderList(response);
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

    // let { items, allItems } = this.state;

    // this.setState({
    //   filterText: text,
    //   items: text ?
    //     allItems.filter((item: any) => item.Title.toLowerCase().indexOf(text.toLowerCase()) >= 0) :
    //     allItems
    // });
  }

  private _applyFilterOnList(text: string): void {

    let siteKind = this.defaultSiteType;

    if (typeof siteType === "number") {
      siteKind = siteType;
    }

    let endpoint = "/_vti_bin/CoopSiteService.svc/sites/siteType(" + siteKind + ")/rowLimit(" + (text === "" ? 30 : 0) + ")/filter(" + (text === "" ? null : text) + ")";

    SitesClient.get(endpoint, true).then((response: any) => {
      this._renderList(response);
    });
  }

  private _getFavouriteStatus(item: ISitesListItem): JSX.Element {
    return item.favourite ?
      <i className="ms-Icon ms-Icon--HeartFill ms-fontColor-red ms-fontColor-white--hover"></i> :
      <i className="ms-Icon ms-Icon--Heart ms-fontColor-red ms-fontColor-white--hover"></i>;
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
      let siteKind = 4;

      if (typeof siteType === "number") {
        siteKind = siteType;
      }

      let endpoint = "/_vti_bin/CoopSiteService.svc/sites/siteType(" + siteKind + ")/rowLimit(30)/filter(null)";

      SitesClient.get(endpoint, true).then((response: any) => {
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
