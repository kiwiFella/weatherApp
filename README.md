# To CREATE a new `expo` App project:

1. cd to the root App folder `~/WWW/Apps/expo`
2. run `npx create-expo-app somethingApp` - this will create the app project and all the expo folders/dependancies/etc.

# To START / RUN the app in simulator
1. cd into the new dir `cd somethingApp`
2. run `npm start` - this runs expo
3. Alternatively - since i have xcode and ios simulator installed i can...  open the xcode program THEN run ` npm run ios` 
4. access debug mode on ios simulator by clicking `command + D` keys (seems to only work once - need to exit expo app to access it again - click iphone circle home key)
5. to refresh ios simulator click `command + r` keys


----------

# Set up navigation
1. run `npm install @react-navigation/native` - this is the navigation that works with expo
2. we need to further config expo to work with navigation... run `npx expo install react-native-screens react-native-safe-area-context`
3. to install `tab` based navigation run: `npm install @react-navigation/bottom-tabs`

# Install Expo location
This allows us to get the geolaction of device the app is running on.
1. run `npx expo install expo-location`

# Install Expo dotenv
to store secrets/ API keys we use a `.env` file in project root
1. run: `npm install -D react-native-dotenv`
2. open `babel.config.js` and edit file
    under 'presets' add the following `plugins: ['module:react-native-dotenv']`
3. create a `.env` file in project root

NOTE: we dont want to commit our secrests - so don't forget to `add this to .gitignore`

# Date display tool
date and time stamps usually need formatting - `moment` tool does this
1. run `npm install moment --save`

NOTE: moment is stale - it's own github page recommends to juse a different lib - find a better lib for future projects
------------

# FUTURE:
this projects is only a 3 page app - so it uses props - look into `react context` for future projects that need to pass data around many pages or often (eg. if passing a users name to lots of pages, or passing value deep into page tree)
see: https://react.dev/learn/passing-data-deeply-with-context 

------------ 
# setup eslint and prittier
@TODO: currently not setup correctly - obviously the examples i used are out of date - so look into a new, better method.

1. while in the project dir
2. run `npm install eslint --save-dev` to install eslint and other node_modules into the project
3. initialize eslint by running `npx eslint --init` - click enter for all default setting prompts - this will eventually create a `eslintrc.js` file at the root of the project folder
4. now run `npm install @react-native-community/eslint-config --save-dev`
5. add some new rules to `eslintrc.js` file
    under `extends:` add 
        "@react-native-community"

    under `rules` add
        semi: ['error', 'never'],
        'comma-dangle': [2, 'never'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-use-before-define': [
            'error', 
            { functions: true, classes: true, variables: false }
        ]

6. install prettier: run `npm install --save-dev --save-exact prettier`
7. once complete, run `touch prettierrc.js` to create the prettierrc.js file
8. add the following to the file
    module.exports = {
        bracketSpacing: true,
        singleQuote: true,
        tabWidth: 4,
        useTabs: false,
        trailingComma: "none",
        semi: false
    };

9. update `package.json` - under `scripts` add `"lint": "eslint ."`
10. run `npm run lint`