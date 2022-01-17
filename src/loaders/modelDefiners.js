const modelDefiners = [
    require('../models/User'),
    // Add more models here...
];

module.exports = ({sequelize}) => {
    for (const modelDefiner of modelDefiners) {
        console.log({modelDefiner})
        modelDefiner(sequelize);
    }
}