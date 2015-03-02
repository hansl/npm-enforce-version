# NPM Version Check

Check a version of NPM is properly installed. Enforce a version of NPM on your dev or production environment.

# How-to

Simply add this package to your dependencies at the version you want to enforce, e.g.

```npm install --save npm-version-check@2.6.1```

If someone installs your package without having a version superior to the one specified, installation will fail.
