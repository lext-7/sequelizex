# sequelizex


  some useful utilities for sequelize, such as simeple datatype.

## Installation

```
  npm install sequelize-x
```

## simpel Datatype

```js
var sequelizex = require('sequelize-x');
var shortDataTypes = sequelizex.DataTypes;

module.exports = function (sequelize, DataTypes) {

  var Model = sequelize.define('Model', {

    string: shortDataTypes.String(),
    stringWithMaxlength: shortDataTypes.String(256),
    stringAllowNull: shortDataTypes.String(null, true),

    double: shortDataTypes.Double(),
    doubleWithCustomDefaultValue: shortDataTypes.Double(10),

    int: shortDataTypes.Int(),
    intWithCustomDefaultValue: shortDataTypes.Int(10),

    phone: shortDataTypes.Phone(true),
    phoneAllowNull: shortDataTypes.Phone(true),

    text: shortDataTypes.Text(),

    time: shortDataTypes.Date(),
  });

  return Model;
};


```
