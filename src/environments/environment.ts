// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthMode } from 'src/app/auth/auth.enum'

export const environment = {
  production: false,
  authMode: AuthMode.InMemory,
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig: {
    apiKey: 'AIzaSyCyrMogfn50uQIsUiyd44prislihs3bwRM',
    authDomain: 'lemon-mart-gio.firebaseapp.com',
    projectId: 'lemon-mart-gio',
    storageBucket: 'lemon-mart-gio.appspot.com',
    messagingSenderId: '109726919099',
    appId: '1:109726919099:web:4b4968b8d8d1f511a1fc9e',
    measurementId: 'G-TN2396YTVB',
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
