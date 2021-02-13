# Ionic React Tab Component

Built on top of the [ionic-react-conference-app](https://github.com/ionic-team/ionic-react-conference-app)

## Table of Contents

- [Getting Started](#getting-started)
- [App Preview](#app-preview)

## Getting Started

- [Download the installer](https://nodejs.org/) for Node LTS.
- Install the ionic CLI globally: `npm install -g ionic`
- Clone this repository: `git clone https://github.com/ionic-team/ionic-react-conference-app.git`.
- Run `npm install` from the project root.
- Run `ionic serve` in a terminal from the project root.
- :tada:

## App Preview

### Home Page

![Home](/public/assets/screenshot-home.png)

### Basic Tab Page

![Basic-Tab](/public/assets/screenshot-basic.png)

### Color Tab Page

![Color-Tab](/public/assets/screenshot-color.png)

## Usage

- TabHeader Component Props
  - titles: string[]
  - selectedTab: string
  - onIonChange: Function
  - bgColor?: string
  - highlight?: string = "light"


- TabView Component Props
  - show: boolean
  - children: React.Component

### Basic Tab

    <TabHeader
        titles={titles}
        selectedTab={basicTab}
        onIonChange={(e) => setBasicTab(e.detail.value)}
    />

### Color Tab

    <TabHeader
        titles={titles}
        selectedTab={colorTab}
        onIonChange={(e) => setColorTab(e.detail.value)}
        bgColor="primary"
        highlight="light"
    />

### Tab View

    <TabView show={colorTab === titles[0]} children={<TabViewOne />} />
