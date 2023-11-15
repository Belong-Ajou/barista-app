"use strict";

const logger = require("../config/logger");
const fs = require("fs");

let recipe_data = {};

fs.readFile('src/routes/recipe.json','utf8', function(err, data){
    if (err != null){
        logger.error(`Fail to read file: ${err}`);
        return;
    }
    recipe_data = JSON.parse(data);
})

const output = {
    home : (req, res) => {
        logger.info('GET / 200 "Home');
        res.render("main", {recipe_data});
    },
};

module.exports = output;