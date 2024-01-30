import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './GetListItemsWebPart.module.scss';

export interface IGetListItemsWebPartProps {
}

export interface ISPists {
  value: ISPList[];
}
export interface ISPList {
  Title: string;
  Id: string;
  Shiptype: string;
  Length: string;
  Crew: string;
  Heigth: string;
  Decks: string;
  Width: string;
}

export default class GetListItemsWebPart extends BaseClientSideWebPart<IGetListItemsWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.getListItems }"></div>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
