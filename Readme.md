# mergejson

Merge two files using a path selector. Useful for npm-package and similar. Second file gets lodash _.defaults applied, preserving any existing values.

## Installation

```npm i && npm link```

## Example useage

```mergejson ../alpha/package.json package.json scripts```

Merges any scripts the second given file doesn't have.
