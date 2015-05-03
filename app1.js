'use strict';
//electron window set-up
var app = require('app');
var BrowserWindow = require('browser-window');
var mainWindow = null;

// Quit when all windows are closed.
app
  .on('window-all-closed', function() {
    app.quit();
  })
  .on('ready', function()
  {
    mainWindow = new BrowserWindow({});
    mainWindow.maximize();
    mainWindow.loadUrl('https://mail.google.com/');
  //  .loadUrl('file://' + __dirname + '/index.html')
    mainWindow.focus();;
  });
