# macpaw-ui

## Installation

Install with npm:

```bash
npm install --save @mgadev/macpaw-ui
```

or with yarn:

```bash
yarn add @mgadev/macpaw-ui
```

And import stylesheets manually:

```jsx
import '@mgadev/macpaw-ui/lib/ui.css';
```

## Adding new Component

- Add Component's JSX and styles to [src/%ComponentName%](/src) directory
- Import Component's JS, styles to [ui.js](/src/ui.js) and [ui.scss](/src/ui.scss) correspondingly
- Add document page in `/pages/%component-name%.mdx`

## Adding new Icons

- All common icons should have size 24x24px and dynamic (not hard-coded) `fill` attribute (so it can be changed / overridden later is CSS or React component)
- Add new SVG file icon to `src/Icons/svg/%name%_icon.svg`
- Run `yarn icons` CLI command

## Requirements

- Node 20+
- npm 7+ (lock file v2)

## Library Release Process

Our library release process is designed to ensure quality, consistency, and proper versioning. The process is broken down into multiple stages to ensure every change is tracked, reviewed, and integrated appropriately.
We use [changesets](https://github.com/changesets/changesets) for version and release management.

### Uploading Changes

Whenever you introduce a new change, run the command:

> You have to do this at least once per branch with some changes.

- The CLI will prompt you with questions regarding your changes. You'll need to specify the nature and level of the changes (options: patch, minor, major).
- After completing the CLI prompts, commit the changes with a commit message similar to `chore: update changesets`.

```bash
npm run changes:add
git add . && git commit -m "chore: update changesets"
git push
```

> Generate and upload tag release

```bash
npm run changes:release
git push --tags
```

> Publish

```bash
npm run changes:publish
```

## Host

- run `yarn build`
- serve `out` directory as public
