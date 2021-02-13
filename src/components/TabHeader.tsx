import React from 'react'
import {
  IonHeader,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from '@ionic/react'
import './TabHeader.scss'

interface TabHeaderProps {
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

const TabHeader: React.FC<TabHeaderProps> = ({
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

export default TabHeader;