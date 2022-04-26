const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

exports.getContactPage = (req,res, next) => {
    res.sendFile(path.join(rootDir , 'views' , 'contactus.html'));
  }