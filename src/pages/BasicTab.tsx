import React from 'react'

import { IonContent, IonPage } from '@ionic/react'
// import './basicTab.scss'

import { connect } from '../data/connect'
import AppHeader from '../components/AppHeader'
import TabHeader from '../components/TabHeaderDemo'
import TabView from '../components/TabView'
import TabViewOne from '../components/TabViewOne'
import TabViewTwo from '../components/TabViewTwo'
import { setBasicTab } from '../data/component/component.actions'
import { Constants } from '../util/constants'

interface OwnProps {
  basicTab: string
}
interface StateProps {}
interface DispatchProps {
  setBasicTab: typeof setBasicTab
}

type BasicTabProps = OwnProps & StateProps & DispatchProps

const BasicTab: React.FC<BasicTabProps> = ({ basicTab, setBasicTab }) => {
  const titles = [Constants.tabs.basic.one, Constants.tabs.basic.two]

  return (
    <IonPage id="basic-tab-page">
      <AppHeader />
      <TabHeader
        titles={titles}
        selectedTab={basicTab}
        onIonChange={(e) => setBasicTab(e.detail.value)}
        color="danger"
        // mode="ios"
      />

      <IonContent fullscreen={true}>
        <TabView show={basicTab === titles[0]} children={<TabViewOne />} />
        <TabView show={basicTab === titles[1]} children={<TabViewTwo />} />
      </IonContent>
    </IonPage>
  )
}

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    basicTab: state.component.basicTab,
  }),
  mapDispatchToProps: {
    setBasicTab,
  },
  component: React.memo(BasicTab),
})
