import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  setTabColor,
  setTabHighlight,
} from '../data/component/component.actions'
import { connect } from '../data/connect'

interface OwnProps {}

interface StateProps {
  tabColor: string
  tabHighlight: string
}

interface DispatchProps {
  setTabColor: typeof setTabColor
  setTabHighlight: typeof setTabHighlight
}

interface TabViewOneProps extends OwnProps, StateProps, DispatchProps {}

const TabViewOne: React.FC<TabViewOneProps> = ({
  tabColor,
  tabHighlight,
  setTabColor,
  setTabHighlight,
}) => {
  const history = useHistory()
  return (
    <div id="tab-view-one" style={{ marginTop: '50px' }}>
      <IonItem>
        <IonLabel>Background Color</IonLabel>
        <IonSelect
          onIonChange={(e) => {
            setTabColor(e.detail.value)
            history.replace('/color-tab')
          }}
          selectedText={tabColor}
        >
          <IonSelectOption value="primary">Primary</IonSelectOption>
          <IonSelectOption value="secondary">Secondary</IonSelectOption>
          <IonSelectOption value="tertiary">Tertiary</IonSelectOption>
          <IonSelectOption value="success">Success</IonSelectOption>
          <IonSelectOption value="warning">Warning</IonSelectOption>
          <IonSelectOption value="danger">Danger</IonSelectOption>
          <IonSelectOption value="light">Light</IonSelectOption>
          <IonSelectOption value="medium">Medium</IonSelectOption>
          <IonSelectOption value="dark">Dark</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonLabel>Highlight</IonLabel>
        <IonSelect
          onIonChange={(e) => {
            setTabHighlight(e.detail.value)
            history.replace('/color-tab')
          }}
          selectedText={tabHighlight}
        >
          <IonSelectOption value="light">Light</IonSelectOption>
          <IonSelectOption value="medium">Medium</IonSelectOption>
          <IonSelectOption value="dark">Dark</IonSelectOption>
        </IonSelect>
      </IonItem>
    </div>
  )
}

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    tabColor: state.component.tabColor,
    tabHighlight: state.component.tabHighlight,
  }),
  mapDispatchToProps: {
    setTabColor,
    setTabHighlight,
  },
  component: TabViewOne,
})
