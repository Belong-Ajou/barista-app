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

require("dotenv").config();
const DRIP_API = process.env.DRIP_API || "192.168.0.9/drip";
const request = require('request');

const control = {
    drip: async (req, res) => {
        const recipe_num = req.body.recipe;
        logger.info(`Recieve Recipe: ${recipe_num}`);
        try{
            request.post({
                headers: {'content-type': 'application/json'},
                url: DRIP_API,
                body: recipe_data.recipe[recipe_num],
                json: true
            }, function(error, response, body){
                res.json(body);
            });
        } catch(err){
            logger.error(`POST /drip Response: ${err}`);
        }
    }
}

module.exports = {
    output,
    control,
};