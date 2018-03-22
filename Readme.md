# mergejson

Merge two files using a path selector. Useful for npm-package and similar. Second file gets lodash _.defaults applied, preserving any existing values.

## Installation

```
npm i -g @djk/mergejson
```

<h2>Example useage</h2>

```
mergejson ../alpha/package.json package.json scripts
```

Merges any scripts the second given file doesn't have.
