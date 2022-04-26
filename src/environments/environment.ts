// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  usersDbUrl: 'http://localhost:3000/users',
  apiUrl: 'https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=activity&site=stackoverflow',
  apiAuthorUrl: 'https://api.stackexchange.com/2.3/users/',
  apiTagUrl: 'https://api.stackexchange.com/2.3/tags/',
  apiAnswersUr:'https://api.stackexchange.com/2.3/questions/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
