import * as React from "react";
import {
  Label,
  Pivot,
  PivotItem,
  PivotLinkFormat,
  PivotLinkSize
} from "office-ui-fabric-react";

declare var siteType: any;

import "office-ui-fabric-react/dist/css/fabric.min.css";
import { Sites } from "./AllSites";
import { Favourites } from "./Favourites";
import { RecentlyChanged } from "./RecentlyChanged";

import { Translations } from "./locales/data";

export const SelectedTabKey = "SelectedTabKey";

export class Tabs extends React.Component<any, any> {

  selectedTab: string;

  constructor() {
    super();

    this._onTabSelected = this._onTabSelected.bind(this);
    this._onTabPinned = this._onTabPinned.bind(this);

    let storedTab = localStorage.getItem(SelectedTabKey);
    this.selectedTab = storedTab ? storedTab : "favs";
  }

  public render() {
    return (
        <Pivot linkSize={ PivotLinkSize.normal } linkFormat={ PivotLinkFormat.tabs } initialSelectedKey={this.selectedTab} onLinkClick={ this._onTabSelected }>
            <PivotItem itemKey="allItems" linkText={Translations.getByKey("Tabs.All")}>
              <i className={this._getPinnedIcon("allItems")} aria-hidden="true" onClick={this._onTabPinned}></i>
              <Sites />
            </PivotItem>
            <PivotItem itemKey="favs" linkText={Translations.getByKey("Tabs.Favourites")}>
              <i className={this._getPinnedIcon("favs")} aria-hidden="true" onClick={this._onTabPinned}></i>
              <Favourites />
            </PivotItem>
            <PivotItem itemKey="recentlyUsed" linkText={Translations.getByKey("Tabs.RecentlyUsed")}>
              <i className={this._getPinnedIcon("recentlyUsed")} aria-hidden="true" onClick={this._onTabPinned}></i>
              < RecentlyChanged />
            </PivotItem>
        </Pivot>
    );
  }

  private _onTabPinned(): void {
    console.log(this.selectedTab);

    localStorage.setItem(SelectedTabKey, this.selectedTab);
    this.forceUpdate();
  }

  private _onTabSelected(item: PivotItem): void {
    this.selectedTab = item.props.itemKey;
  }

  private _getPinnedIcon(tabKey: string): string {

    let storedTab = localStorage.getItem(SelectedTabKey);
    let isPinned = tabKey === storedTab;

    return isPinned ? "ms-Icon ms-Icon--Pinned pin-tab" : "ms-Icon ms-Icon--Pin pin-tab";
  }
}
