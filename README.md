# biomapper-docs

## Contributing

### Simple fixes

For simple fixes, create a PR for us directly thorough the Github UI.

This flow will give you some basic feedback for how the rendering of the files
looks like, but it is not accurate and quite basic.

### Proper development

If you want to contribute a significant change or work in an environment where
you see the actual rendering - make yourself a proper development setup.

#### Prerequisites

- Learn how to use command line
- Install [VS Code](https://code.visualstudio.com/)
- Install [Node.js](https://nodejs.org/)
- Install [git](https://git-scm.com/)
- Install [git-lfs](https://git-lfs.com/)

#### Installation

This is a one-time setup.

1. Clone the repo and open its directory in the command line.
2. `corepack enable`
3. `yarn install`

#### Development

`yarn dev`

Run this command and keep it running - it is a development server that renders
the docs website from you local repo.

Open the URL that the command printed to view the local website.

If you see 404 error just click on the header and it will open the main page.

You can now edit the files and see live updates to the website right in your
browser.
