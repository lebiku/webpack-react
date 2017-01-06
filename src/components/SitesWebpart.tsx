import * as React from "react";
import "office-ui-fabric-react/dist/css/fabric.min.css";

import { Tabs } from "./Tabs";

export class Sites extends React.Component<any, any> {
  render() {
    return <div className="sitesWebpart">
      <Tabs />
    </div>;
  }
}
