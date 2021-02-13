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
  colored?: boolean
  [x: string]: any
}

interface StateProps {
  tabColor: string
  tabHightlight: string
}

interface DispatchProps {}
interface TabHeaderDemoProps extends OwnProps, StateProps, DispatchProps {}

const TabHeaderDemo: React.FC<TabHeaderDemoProps> = ({
  titles,
  selectedTab,
  onIonChange,
  colored = false,
  tabColor,
  tabHightlight,
  ...rest
}) => {
  return (
    <IonHeader id="tab-header">
      <IonToolbar
        className={
          colored ? 'colored-tab-bar-' + tabColor + '-' + tabHightlight : ''
        }
      >
        {/* <IonToolbar
        className={
          bgColor ? 'colored-tab-bar-' + bgColor + '-' + highlight : ''
        }
      > */}
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
  mapStateToProps: (state) => ({
    tabColor: state.component.tabColor,
    tabHightlight: state.component.tabHighlight,
  }),
  component: TabHeaderDemo,
})
