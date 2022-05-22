# twitch-vue-boilerplate

Start your own Twitch extension based on Vue3 with the Viewers and Broadcaster entries.
Includes the Twitch Auth built-in, ready to be used.

## Index
The main view entry, which is displayed on the streamer page, visible to all viewers.
Using `App.vue` as the base component, and includes an authentication page for asking viewers to access their User ID `AuthPage.vue`, and the main page that includes the extension's UI `MainPage.vue`.

If your extension does not require user authentication, you can simply remove `AuthPage.vue` from the system, and remove all references to it.

Once built, and deployed on Twitch, set the `Panel Viewer Path` to `index.html`.

### Routing
Navigating between pages is done manually using `Vuex` to handle the app state, in `App.vue`.

### State management
Using `Vuex` to handle state management.

## Broadcaster
The "Live Config" page for broadcaster to handle 'backstage' commands that affect the extension behaviour.
Using `BroadcasterPage.vue` as the base component, and includes twitch's authentication method for exporting and using broadcaster's user data, channel ID and other useful data, for back-end identification.

If your extension does not require broadcaster management, you can simply remove `BroadcasterPage.vue`, and the entire `pages` entry in `vue.config.js`
```
  pages: {
    index: './src/main.js',
    broadcaster: './src/broadcaster.js'
  }
```

Once built, and deployed on Twitch, set the `Live Config Path` to `broadcaster.html`.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
