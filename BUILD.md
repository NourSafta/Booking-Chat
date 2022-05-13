# How to build
Instructions for building this repository on your local machine.

## Environment Setup
Before you start, make sure you have a greater version than v12 of NodeJS installed on your computer by running this command:
```
node -v
```
If you don't, install a suitable version of NodeJS.

## Build Instructions

- Clone this repo 
```
git clone https://github.com/NourSafta/Booking-Chat.git
cd Booking-Chat
```


- Open the project with VS code
```
code .
```

- Install Expo CLI

you can now install expo-cli as a global dependency using either npm or yarn.
```
# using npm
$ npm install -g expo-cli
```
```
# using yarn
$ yarn global add expo-cli
```

- Create an account on expo

In your terminal , you can register to expo by running:
```
$ expo register
```

After you create the account, you can login to expo-cli on your local machine to be able to host the project on expo platform
by running the following command:
```
$ expo login
```
- Install Expo Go

Expo Go is a mobile application available on iOS and Android.

After downloading the app, you can login to your expo account.

- Run the project
```
$ npm start // or $ expo start
```
A QR code will be displayed in the terminal console.

- Open Expo Go app on your phone and scan the code with it. Make sure your phone and computer are on the same LAN.

And there you go , the app is now opened on expo Go where you can inspect and debug the project.


