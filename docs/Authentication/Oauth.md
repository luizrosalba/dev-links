# OAuth

[https://www.udemy.com/course/oauth-2-simplified/](https://www.udemy.com/course/oauth-2-simplified/)

## 1.2 A Brief History of OAuth

- In OAuth, we focus on OAuth from the perspective of building OAuth applications and accessing APIs. And then secondly, we talk about the other side, which is protecting APIs with OAuth.
- how to use OpenID Connect to learn information about the user.
- validate Access Tokens and how to deal with revoked access

## 1.3 How OAuth Improves Application Security

- Before OAuth it was actually very common for API is to use HTTP Basic Auth. That's just an application sending a username and password to the API.
- Applications had to ask the user for their password, store that password and then use that password in API requests.
- When third party apps, like using third party Twitter clients want to dot his, they would have to ask the user for their password and then store it and use it at.
- Applications needed to access user data from third party apps without the users sharing their password.
- What OAuth does at a high level is requires that every application sends the user out to the OAuth server to log in there, and then redirects them back to the app so the app can get tokens.
- The key thing here is this redirect step. It means the user actually leaves the application and they go type in their password at the OAuth server instead of ever giving their password to the application.
- If you wanted to add MFA, you don't need to make any changes to the apps at all, since you just turn it on at your OAuth server and it would immediately be enabled across all of your applications.

## 1.4 OAuth and OpenID

- OAuth was originally designed for applications to get access to APIs.
- The application doesn't actually need to know who the user is that's using that application.

- So when you go to a hotel and you check in, you show the person at the front desk your ID and your credit card, and they give you back a hotel key. Now, this key card is what you use to go access rooms in the hotel. So you might take it to the door of your room, swipe it on the door and the door opens up and lets you in. Now, in order for that system to work, the door doesn't actually need to know who you are, right? The person at the front desk knows who you are. They're the ones that checked your ID, but they give you back this key card which represents access to that room. You might then also take that keycard and access the hotel gym or the pool or other resources in the hotel. And this is exactly analogous to OAuth, where the person at the front desk is like the OAuth authorization server. They're the one checking ID cards and authenticating the user. On the other hand, if the application does need to know who the user is, for example, if it wants to show their name in the interface or show their profile photo in the corner, that's where we need something besides OAuth, because OAuth doesn't actually give us that information. There's nothing in OAuth that communicates user information, that's all added externally. Now, the main way that's added is using OpenID Connect.

- Just like a hotel key, the application using the access token doesn’t need to know anything about how it works.

- Applications should just use the access token in an API request and let the API figure out if it’s valid.
- OpenID Connect takes OAuth as a foundation and it adds in user identity information on top.
- OAuth issues access tokens to apps, OpenID Connect issues ID tokens to apps and the ID Token is a statement about the user.
- OAuth is always about accessing APIs and OpenID Connect is about identifying the user. Think about accessing APIs and identifying users.

## 2.5 Application Types

- In this lesson, we're going to introduce the role of the authorization server and show how OAuth exchange works and solves some of these problems.
- In a typical scenario of a user trying to access some data in an API, we have four roles.

- First, the user, they are the person with the account.
- Secondly, there's the device. They are using this device like their mobile phone or their browser.And that device is either running an application or accessing an application.
- The application is the third role. So if it's a mobile phone, for example, the app is running on the device and if it's a browser, then the device is accessing the application over the internet.
- The fourth role is the API, and that is the thing the application is making requests to.

- In the OAuth spec, you'll see these more specific terms.
- Instead of the user, the spec calls it the Resource Owner.
- Instead of device it's actually the User Agent.
- Instead of the application, it's called the OAuth Client.
- Instead of the API, it's called the Resource Server.

## 2.6 Application Types
