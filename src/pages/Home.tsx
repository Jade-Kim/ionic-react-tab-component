import React from 'react'
import { IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/react'
import { connect } from '../data/connect'
import AppHeader from '../components/AppHeader'
import { setBasicTab, setColorTab } from '../data/component/component.actions'
import { Constants } from '../util/constants'

interface OwnProps {}
interface StateProps {}
interface DispatchProps {
  setBasicTab: typeof setBasicTab
  setColorTab: typeof setColorTab
}

type HomeProps = OwnProps & StateProps & DispatchProps

const Home: React.FC<HomeProps> = ({ setBasicTab, setColorTab }) => {
  return (
    <IonPage id="home-page">
      <AppHeader />
      <IonContent>
        <IonList>
          <IonItem
            routerLink="/basic-tab"
            detail
            onClick={() => setBasicTab(Constants.tabs.basic.one)}
          >
            <IonLabel>Go Basic Tab 1</IonLabel>
          </IonItem>
          <IonItem
            routerLink="/basic-tab"
            detail
            onClick={() => setBasicTab(Constants.tabs.basic.two)}
          >
            <IonLabel>Go Basic Tab 2</IonLabel>
          </IonItem>
          <IonItem
            routerLink="/color-tab"
            detail
            onClick={() => setColorTab(Constants.tabs.color.one)}
          >
            <IonLabel>Go Color Tab 1</IonLabel>
          </IonItem>
          <IonItem
            routerLink="/color-tab"
            detail
            onClick={() => setColorTab(Constants.tabs.color.two)}
          >
            <IonLabel>Go Color Tab 2</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({}),
  mapDispatchToProps: {
    setBasicTab,
    setColorTab,
  },
  component: React.memo(Home),
})
