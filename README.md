# GitHub User Search

A React app that displays users from GitHub

The app was deployed using netlify and can be visited [here](https://search-github-animated.netlify.app/)

![github-user](https://i.postimg.cc/C5KTxm8z/image.png)

## Some development notes

### Tasks organization

I decided to organize my (initial) taks in a [todo list](https://github.com/brunochan2001/Search-User-Github-Animated/issues/1)

Initial commits have a "task Id" before a description message to make it easier to understand code changes in the future. The task IDs are from the todo list (for instance, `[i-6] Add functionality to UserSinglePage`).

### Library decisions

- Regarding the core technology, I concluded that CRA was a safe bet to get the repository up and running quickly.
- I used typescript for its static typing, and its advantages over maintenance , prop-types and flow.
- For layout, used material-ui because it has ready to use components and easy way to create a theme.
- Using Redux to have global state and get the user in any component.
- Install the library react-use, to use hook useDebounce that allows control the execution of my function after a certain time to make the request of the users improving performance avoiding unnecessary calls to the Api.
- For test I just used jest.

### Additional thoughts

- All the requirements have been fulfilled

### How to run locally

1. Clone the repo

2. Install

```bash
npm install
```

3. Run a dev environment

```bash
npm start
```

4. Run test

```bash
npm run test
```
