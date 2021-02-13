import React from 'react'
import {
  IonHeader,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from '@ionic/react'
import './TabHeader.scss'
import { connect } from '../data/connect'

interface OwnProps {
  titles: string[]
  selectedTab: string
  onIonChange: (event: CustomEvent) => void
  bgColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'light'
    | 'medium'
    | 'dark'
  highlight?: 'light' | 'medium' | 'dark'
  [x: string]: any
}

interface StateProps {}
interface DispatchProps {}
interface TabHeaderStateProps extends OwnProps, StateProps, DispatchProps {}

const TabHeaderState: React.FC<TabHeaderStateProps> = ({
  titles,
  selectedTab,
  onIonChange,
  bgColor,
  highlight = 'light',
  ...rest
}) => {
  return (
    <IonHeader id="tab-header">
      <IonToolbar
        className={
          bgColor ? 'colored-tab-bar-' + bgColor + '-' + highlight : ''
        }
      >
        <IonSegment
          value={selectedTab}
          onIonChange={onIonChange}
          mode="md"
          {...rest}
        >
          {titles.map((title) => (
            <IonSegmentButton key={'tab-header-' + title} value={title}>
              {title}
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonToolbar>
    </IonHeader>
  )
}

export default connect<OwnProps, StateProps, DispatchProps>({
  // mapStateToProps: (state) => ({ }),
  // mapDispatchToProps: { },
  component: TabHeaderState,
})
