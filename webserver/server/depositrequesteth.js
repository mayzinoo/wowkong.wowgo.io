var assert = require('assert');
//var ethClient = require('./eth_client');
var database = require('./database');
var request = require('request');
var config = require('../config/config');


module.exports = function(userid,deposit_address, currency_type, currency_amt, wow_amt, deposit_name, status,  callback) {
    

   database.requestdepositeth(userid, deposit_address, currency_type, currency_amt, wow_amt, deposit_name, status,   function (err) {

        if (err) {
	console.log('ERRRRRRRR');
            if (err.code === '23514')
                callback('NOT_ENOUGH_MONEY');
            else if(err.code === '23505')
                callback('SAME_TIP_ID');
            else
                callback(err);
            return;
        }
        else{ 
console.log('NOT ERRRRRRRRRR');
callback(null);  }
        
    });
};

