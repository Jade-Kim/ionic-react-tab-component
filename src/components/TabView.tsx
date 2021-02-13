import React from 'react'

interface TabViewProps {
  show: boolean
}

const TabView: React.FC<TabViewProps> = ({ show, children }) => {
  return <div style={show ? {} : { display: 'none' }}>{children}</div>
  // return show ? <>{children}</> : null
}

export default TabView
