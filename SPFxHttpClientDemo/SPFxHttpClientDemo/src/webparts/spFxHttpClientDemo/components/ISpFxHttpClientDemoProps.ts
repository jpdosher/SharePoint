
import {
  ButtonClickedCallback,
  ISPList
} from '../../../models';

export interface ISpFxHttpClientDemoProps {
  spListItems: ISPList[];
  onGetListItems?: ButtonClickedCallback;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
}