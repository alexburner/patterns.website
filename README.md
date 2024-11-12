# patterns.website
Indexing personal projects

## install
Install npm dependencies
```cmd
npm install
```

## watch (dev)
Run webpack dev server with watch
```cmd
npm run watch
```

## build (prod)
Clean out built folder & run webpack build with production optimizations
```cmd
npm run build
```
Note! built folder === project root, because of weird things like experiments submodule

## style
Auto-format code with `prettier` and `tslint --fix`
```cmd
npm run style
```

## clean
Remove npm dependencies and build caches
```cmd
npm run clean
```

## updating `experiments` submodule

On repo clone init:

```sh
git submodule init
```

On submodule changes:

```sh
cd experiments  # enter submodule repo
git checkout master  # ??
git pull  # get the latest
cd ../  # back to parent repo
git status  # "experiments (new commits)"
git add .
git commit -m "Update experiments submodule"
```

