import * as React from 'react';
import styles from './ReactDemo.module.scss';
import { IReactDemoProps } from './IReactDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {
  Button, Fabric
} from 'office-ui-fabric-react';
import { GetData, GetDataFromExternalSource } from '../service/DemoService';
import './CanvasSection.scss';

// export default class ReactDemo extends React.Component<IReactDemoProps, {isMobile: boolean}> {
export const ReactDemo: React.FC<IReactDemoProps> = ( props ) => {
  
  const [data, setData] = React.useState<any>();
  const [flag, setFlag] = React.useState<boolean>(false);

  React.useEffect(() => {
    // GetData().then( _data => {
    //   setData(_data);
    // })
    // GetDataFromExternalSource().then(_dummy => {
    //   setData(_dummy);
    // })
  }, []);
  const style: any = {
    row: {
      border: '1px solid black',
    },
    col: {
      border: '1px solid red'
    }
  }

  return (
    <Fabric>
      <div className="ms-Grid-row" style={style.row}>
        <div className="ms-Grid-col ms-sm12 OneColumnSection-3 TwoColumnsSection-6 ThreeColumnsSection-12 TwoThirds-6" style={style.col}>
          Col 1
        </div>
        <div className="ms-Grid-col ms-sm12 OneColumnSection-3 TwoColumnsSection-6 ThreeColumnsSection-12 TwoThirds-6" style={style.col}>
          Col 2
        </div>
        <div className="ms-Grid-col ms-sm12 OneColumnSection-3 TwoColumnsSection-6 ThreeColumnsSection-12 TwoThirds-6" style={style.col}>
          Col 3
        </div>
        <div className="ms-Grid-col ms-sm12 OneColumnSection-3 TwoColumnsSection-6 ThreeColumnsSection-12 TwoThirds-6" style={style.col}>
          Col 4
        </div>
      </div>
    </Fabric>
  );
};

//export default ReactDemo;
