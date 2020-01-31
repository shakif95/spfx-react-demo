import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactDemoWebPartStrings';
import { ReactDemo } from './components/ReactDemo';
import { IReactDemoProps } from './components/IReactDemoProps';
import { sp } from '@pnp/sp/presets/all'; 

export interface IReactDemoWebPartProps {
  description: string;
}

export default class ReactDemoWebPart extends BaseClientSideWebPart<IReactDemoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactDemoProps > = React.createElement(
      ReactDemo,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit() {
    sp.setup({
      spfxContext: this.context
    });

    return super.onInit();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
