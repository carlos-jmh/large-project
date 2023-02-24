## First Time Install

In the project directory, you can run:

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

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

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

## Testing

### `npm front:test`
### `npm back:test` (coming soon)

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Troubleshooting
### Amplify Issues
If you haven't made any changes to Amplify and it's acting up, the surest way to resolve it is to delete the `amplify` folder, and run `amplify pull --appId **** --envName ****` again.
