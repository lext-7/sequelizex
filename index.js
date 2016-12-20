
const Sequelize = require('sequelize');

const DataTypes = Sequelize;

const String = (num, allowNull) => {
    if (!num) {
        num = 2048;
    }
    if (!allowNull) {
        allowNull = false;
    }
    return {
        type: DataTypes.STRING(num),
        allowNull
    }
};

const Double = (defaultValue) => {
    if (typeof defaultValue === 'undefined') {
        defaultValue = 0;
    }
    return {
        type: DataTypes.DOUBLE,
        defaultValue
    }
};

const Int = (defaultValue) => {
    if (typeof defaultValue === 'undefined') {
        defaultValue = 0;
    }
    return {
        type: DataTypes.INTEGER,
        defaultValue
    }
};

const Phone = (allowNull) => {
    if (typeof allowNull === 'undefined') {
        allowNull = false;
    }
    return {
        type: DataTypes.STRING(11),
        allowNull,
        validate: {
            is: /^\d{11}$/
        }
    }
};

const Url = () => {
    return {
        type: DataTypes.STRING,
        allowNull: false,
        vialidate: {
            isUrl: true
        }
    }
};

const Date = (defaultValue, allowNull) => {
    if (typeof defaultValue === 'undefined') {
        defaultValue = Sequelize.NOW;
    }
    return {
        type: Sequelize.DATE,
        allowNull,
        defaultValue,
    }
};

const Bool = () => {
    return {
        type: Sequelize.BOOLEAN
    }
};

const Text = (allowNull) => {
    if (typeof allowNull === 'undefined') {
        allowNull = false;
    }
    return {
        type: Sequelize.TEXT,
        allowNull
    }
};

const UUID = (primary)  => {
    const opt = {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
    };
    if (primary) {
        opt.primaryKey = true;
    }
    return opt;
};

const filterByStatus = (status) =>{
    return function *(conditions) {
        conditions.where = {
            status: status
        }
        return yield this.findAll(conditions);
    };
};

module.exports = {
    DataTypes: {
        String,
        Phone,
        Int,
        Url,
        Date,
        Double,
        Bool,
        Text,
        UUID,
    },
    Func: {
        filterByStatus
    }
};