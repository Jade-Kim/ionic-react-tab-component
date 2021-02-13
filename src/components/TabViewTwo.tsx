import React from 'react'
import { connect } from '../data/connect'

interface OwnProps {}
interface StateProps {}
interface DispatchProps {}

interface TabViewTwoProps extends OwnProps, StateProps, DispatchProps {}

const TabViewTwo: React.FC<TabViewTwoProps> = () => {
  return (
    <div id="tab-view-two" style={{ marginTop: '50px', textAlign: 'center' }}>
      tab view two page content
    </div>
  )
}

export default connect<OwnProps, StateProps, DispatchProps>({
  //   mapStateToProps: (state) => ({
  //     alert: state.component.alert,
  //   }),
  //   mapDispatchToProps: {
  //     setAlert,
  //   },
  component: TabViewTwo,
})
