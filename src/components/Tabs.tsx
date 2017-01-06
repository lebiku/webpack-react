import * as React from "react";
import {
  Label,
  Pivot,
  PivotItem,
  PivotLinkFormat,
  PivotLinkSize
} from "office-ui-fabric-react";

import "office-ui-fabric-react/dist/css/fabric.min.css";
import { Sites } from "./AllSites";

export class Tabs extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <Pivot linkSize={ PivotLinkSize.large } linkFormat={ PivotLinkFormat.tabs } onLinkClick={ this.onLinkClick.bind(this) }>
            <PivotItem linkText="Alle">
              <Sites />
            </PivotItem>
            <PivotItem linkText="Favoriten">
              <Label>Pivot #2</Label>
            </PivotItem>
            <PivotItem linkText="Kürzlich verwendet">
              <Label>Pivot #3</Label>
            </PivotItem>
        </Pivot>
      </div>
    );
  }

  public onLinkClick(item: PivotItem): void {
    // alert(item.props.linkText);
  }
}
