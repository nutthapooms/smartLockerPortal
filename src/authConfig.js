export const msalConfig = {
    auth: {
      clientId: "a61a1ea8-c8a9-47bf-a84f-caba25dd5879",
      authority: "https://login.microsoftonline.com/d1ee1acd-bc7a-4bc4-a787-938c49a83906", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:3000",
    //   scopes: "api://3a4bd202-bede-4dd7-8321-cda964ab6fee/.default"
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["api://3a4bd202-bede-4dd7-8321-cda964ab6fee/.default"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };