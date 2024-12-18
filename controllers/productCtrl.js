const homeJson = require('../seeders/home.json')

const productCtrl = {
    home: (req, res) => {
        try {
            return res.status(200).json(homeJson);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }
};

module.exports = { productCtrl };