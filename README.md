## First Time Install

In the project directory, you can run:

### `npm install`

Also make sure you have the amplify-cli installed:
### `npm install -g @aws-amplify/cli`

## Using the React App

### `npm run start`
Runs the app in watch mode, then asks if you want to run web/android/ios.
### `npm run web`
Runs the app in watch mode for web.
### `npm run android`
Runs the app in watch mode for android.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Development
#### Frontend
When devloping a new feature that uses APIs, make sure to run amplify pull to retrieve the latest AWS config data.

For every other case: Develop the react application like normal, without making changes to the amplify folder.

### Troubleshooting
### Amplify
Any amplify issues should be resolved if you delete the `amplify` folder and run `amplify pull --appId **** --envName ****`

Respond to the prompts like so:
**IMPORTANT: Please note we responded No to the last question, in comparison to the web app, where we do respond yes. The mobile-main branch should always respond No to the last question.**
```
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building (Use arrow keys)
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react-native
? Source Directory Path:  src
? Distribution Directory Path: /
? Build Command:  npm.cmd run-script build
? Start Command: npm.cmd run-script start
? Do you plan on modifying this backend? No
```
