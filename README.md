## First Time Install

In the project directory, you can run:

### `npm install`
### `npm install`

Also make sure you have the amplify-cli installed:
### `npm install -g @aws-amplify/cli`

Go to the Amplify Studio, click _Local setup instructions_ on the top
### `amplify pull --appId **** --envName ****`
Respond to the prompts like so:
```
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building (Use arrow keys)
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm.cmd run-script build
? Start Command: npm.cmd run-script start
? Do you plan on modifying this backend? Yes
```

## Using the React App

### `npm run start`
Runs the app in watch mode, then asks if you want to run web/android/ios.
### `npm run web`
Runs the app in watch mode for web.
### `npm run android`
Runs the app in watch mode for android.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Development
### Frontend
When devloping a new feature that uses APIs, make sure to run `amplify pull` to retrieve the latest AWS config data.

For every other case: Develop the react application like normal, without making changes to the `amplify` folder.

### Backend
Make sure you run `amplify pull` before creating any new resources to make sure you have the latest AWS config data.
Use the Amplify CLI as needed to create resources and edit them.

In the case that resources are created through Amplify Studio instead of Amplify CLI (let's try to avoid this):

Make sure to run `amplify pull` after the resources are deployed, and create a Pull Request so GitHub has the most updated information.

### Development
#### Frontend
When devloping a new feature that uses APIs, make sure to run amplify pull to retrieve the latest AWS config data.

For every other case: Develop the react application like normal, without making changes to the amplify folder.

### Troubleshooting
### Amplify
Any amplify issues should be resolved if you delete the `amplify` folder and run `amplify pull --appId **** --envName ****`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Troubleshooting
### Amplify Issues
If you haven't made any changes to Amplify and it's acting up, the surest way to resolve it is to delete the `amplify` folder, and run `amplify pull --appId **** --envName ****` again.
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
