![Create react app](https://img.shields.io/badge/build_with-create_react_app-09D3AC?style=for-the-badge&logo=Create-React-App)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![This is a defautl style modal](./src//asset//logo.png)

# HRnet Project
is a web application to manage employee informations.

## Table of contents #
1. [General information](#general)
2. [Purpose](#purpose)
3. [Prerequisites](#Prerequisites)
3. [How to use](#usage)

### 1. <a name="general">General information</a>
HRnet's web application old version is builded with jQuery and used diffrent jQuery plugins as following.

* Date picker plugin
* Modal window plugin - jQuery.modal.js
* Drop-down menus
* Plugin for data tables

Unfortunately some of the jQuery functions doesn´t work properly as expected and slow down the performance of the application.

### 2. <a name="purpose">Purpose</a>

Purpose for this project is to improve the performance of the application. So I need to convert the HRnet old version (builded with `jQuery`) to HRnet new version which is builded with `React`.

This repository is a new HRnet new version which is builded with `React` and use [mui-library](https://mui.com/) to replace the following jQuery plugins.   

* Date picker
* Drop-down menus
* Plugin for data tables

Moreover I have chosen to convert the `Modal-jquery` plugin to  `Modal-react` library and published it as a `npm package`. Plase follow the link 
[kunkanya-modal-react-library](https://github.com/Kunkanya/react-modal-library). 
In its repository you can also follow the steps how to install and how to use as in the [READme.md](https://github.com/Kunkanya/react-modal-library).

### 3. <a name="prerequisites">Prerequisites</a>

```bash
# Check Node.js version
node --version
```

### 4. <a name="usage">How to use</a>

* Clone this project. [www.github.com/kunkanya/Kunkanyaremmer_14_09072022](www.github.com/kunkanya/Kunkanyaremmer_14_09072022)

* install npm package:` kunkanya-modal-react-library` as below command on your terminal. See READme.md in this github repository [kunkanya-modal-react-library](https://github.com/Kunkanya/react-modal-library) for more details on how to use.

```
$ npm install kunkanya-modal-react-library 
```

* run the project 
```
$ npm start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.
