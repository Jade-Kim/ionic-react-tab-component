import React from 'react'
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { connect } from '../data/connect'

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

interface AppHeaderProps extends OwnProps, StateProps, DispatchProps {}

const AppHeader: React.FC<AppHeaderProps> = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonButtons slot="end">
          <IonButton
            href="https://jade-kim.github.io"
            fill="solid"
            color="primary"
          >
            BLOG
          </IonButton>
          <IonButton
            color="tertiary"
            href="https://github.com/Jade-Kim"
            fill="solid"
          >
            GITHUB
          </IonButton>
        </IonButtons>
        <IonTitle style={{ textAlign: 'center' }}>
          JADE's Ionic-React-Tab-Component
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default connect<OwnProps, StateProps, DispatchProps>({
  //   mapStateToProps: (state) => ({
  //     alert: state.component.alert,
  //   }),
  //   mapDispatchToProps: {
  //     setAlert,
  //   },
  component: AppHeader,
})
