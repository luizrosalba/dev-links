# Google

[https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid)

## Setup OAUTH Screen

1. Open https://console.developers.google.com/apis/credentials/consent

- Internal (Google Workspace user ) or External (need to verify app )

2. Fill app info
3. Add Scopes
4. Add Test users

## Setup Credentials

Before you add Sign In With Google, One Tap, or Automatic sign-in to your website setup your OAuth configuration and optionally configure your site Content Security Policy.

1. [https://console.developers.google.com/apis](https://console.developers.google.com/apis)

   1.1 Create a project

   1.2 Select the project on the top dropdown

2. click on the plus sign (Create credentials) > OAuth client ID and for Application type select Web application to create a new client ID. To use an existing client ID select one of type Web application.
3. Add the URI of your website to Authorized JavaScript origins. The URI includes the scheme and fully qualified hostname only. For example, https://www.example.com.
4.

```
Key Point: When testing using http and localhost set the Referrer-Policy header in your web app to
Referrer-Policy: no-referrer-when-downgrade.
```

Add the package

@react-oauth/google

Wrap app to provider

````
    <GoogleOAuthProvider clientId="519028190039-5a09laq8rlrvbff2813li8aqbcldrv7q.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    ```


````

add button

```
import './App.css'
import { GoogleLogin } from '@react-oauth/google';


function App() {

  return (
    <>
      <h1>Example Authentication</h1>
      <div>Google Test 123</div>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />;
    </>
  )
}

export default App

```
