import * as React from 'react';
import styles from './WelcomeReact.module.scss';
import type { IWelcomeReactProps } from './IWelcomeReactProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class WelcomeReact extends React.Component<IWelcomeReactProps, {}> {
  public render(): React.ReactElement<IWelcomeReactProps> {
    const {  
      hasTeamsContext,     
    } = this.props;

    return (
      <section className={`${styles.welcomeReact} ${hasTeamsContext ? styles.teams : ''}`}>
        <h1 className={styles.welcome}>{escape(this.props.message)},{escape(this.props.displayName)} </h1>
                
      </section>
    );
  }
}
