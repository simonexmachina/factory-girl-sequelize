# factory-girl-sequelize

A Sequelize adapter for [factory-girl](https://github.com/aexmachina/factory-girl).

## Usage

```javascript
require('factory-girl-sequelize')();
```

Or, if you want to specify which models it should be used for:

```javascript
require('factory-girl-sequelize')(['User', 'Foo', 'Bar']);
```
