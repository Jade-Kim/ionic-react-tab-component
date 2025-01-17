import React from 'react'
import { Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

import { connect } from './data/connect'
import { AppContextProvider } from './data/AppContext'
import Home from './pages/Home'
import BasicTab from './pages/BasicTab'
import ColorTab from './pages/ColorTab'

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <IonicAppConnected />
    </AppContextProvider>
  )
}

interface StateProps {
  darkMode: boolean
}

interface DispatchProps {}

interface IonicAppProps extends StateProps, DispatchProps {}

const IonicApp: React.FC<IonicAppProps> = ({ darkMode }) => {
  return (
    <IonApp className={`${darkMode ? 'dark-theme' : ''}`}>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/basic-tab" component={BasicTab} />
          <Route path="/color-tab" component={ColorTab} />
          <Route path="/" component={Home} exact />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App

const IonicAppConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
  }),
  mapDispatchToProps: {},
  component: IonicApp,
})
