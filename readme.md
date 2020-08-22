# Ionic React In App Purchase Example App

![GitHub package.json version](https://img.shields.io/github/package-json/v/markxoe/Ionic-React-In-App-Purchases-Example-App?style=flat-square)

## Description

This is an Ionic React Example App that shows the Principle of In App Purchases with the [In App Purchase Plugin](https://github.com/j3k0/cordova-plugin-purchase)  
The main part of the app is in `src/pages/Home.tsx`

## Installation

You'll need:

- Node.js & npm
- Android Studio

### Download

1. Clone this Repository with `git clone https://github.com/markxoe/Ionic-React-In-App-Purchases-Example-App.git`
2. Go into dis folder with `cd Ionic-React-In-App-Purchases-Example-App`

### Dependencies

1. Install Project dependencies with `npm i`

### Building

1. Building the Project with `npm run build` or `ionic build` [*]
2. Sync the Build with Android with `npx cap sync` or `ionic cap sync` [*]
3. And open Android Studio with `npx cap open android` or `ionic cap open android` [*]

### Android Studio

1. Way 1:
   1. Connect an Android device with an USB Cable
   2. You may have to Activate the Dev-options and USB-Debugging on the device
   3. Select the device in the Menu
   4. To the ~~left~~ right of the select, click `Run 'app'`
2. Way 2:
   1. Got to `Build`/`Generate Signed Bundle / APK`
   2. A Window will open, there you will have to make a Certificate
   3. After you are done you can find the APK / App-Bundle under `android/app/release/app-release`

### All in One

```shell
git clone https://github.com/markxoe/Ionic-React-In-App-Purchases-Example-App.git
cd Ionic-React-In-App-Purchases-Example-App

npm i
npm run build
npx cap sync
npx cap open andriod
```

## Author

Mark Oude Elberink

[*]: /uri "With @ionic/cli installed"
