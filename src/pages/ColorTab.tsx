import React from 'react'

import { IonContent, IonPage } from '@ionic/react'
// import './basicTab.scss'

import { connect } from '../data/connect'
import AppHeader from '../components/AppHeader'
import TabHeaderDemo from '../components/TabHeaderDemo'
import TabView from '../components/TabView'
import TabViewOne from '../components/TabViewOne'
import TabViewTwo from '../components/TabViewTwo'
import { setColorTab } from '../data/component/component.actions'
import { Constants } from '../util/constants'
import TabHeader from '../components/TabHeader'

interface OwnProps {
  colorTab: string
}
interface StateProps {}
interface DispatchProps {
  setColorTab: typeof setColorTab
}

type ColorTabProps = OwnProps & StateProps & DispatchProps

const ColorTab: React.FC<ColorTabProps> = ({ colorTab, setColorTab }) => {
  const titles = [Constants.tabs.color.one, Constants.tabs.color.two]

  return (
    <IonPage id="color-tab-page">
      <AppHeader />
      <TabHeaderDemo
        titles={titles}
        selectedTab={colorTab}
        onIonChange={(e) => setColorTab(e.detail.value)}
        colored
      />
      <TabHeader
        titles={titles}
        selectedTab={colorTab}
        onIonChange={(e) => setColorTab(e.detail.value)}
        bgColor="tertiary"
        highlight="light"
      />

      <IonContent fullscreen={true}>
        <TabView show={colorTab === titles[0]} children={<TabViewOne />} />
        <TabView show={colorTab === titles[1]} children={<TabViewTwo />} />
      </IonContent>
    </IonPage>
  )
}

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    colorTab: state.component.colorTab,
  }),
  mapDispatchToProps: {
    setColorTab,
  },
  component: React.memo(ColorTab),
})
