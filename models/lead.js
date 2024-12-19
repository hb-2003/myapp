'use strict';

const { Sequelize } = require("sequelize");

module.exports =(sequelize,DataType) => {
  var Lead = Sequelize.define('Lead',{
    id :{
        type:DataType.UUID,
        defaultValue:DataType.UUIDV4,
        allowNull:false,
        primaykey:true,
    },
    email:{
        type:DataType.STRING,
        allowNull:false,
    },  
  });
  return Lead;  
};