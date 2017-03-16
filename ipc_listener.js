'use strict';

const ipc = require('electron').ipcRenderer;
const BrowserWindow = require('electron').remote.BrowserWindow;

// ping main process to get total no of open window
const syncMsgBtn = document.getElementById('pingMain');
syncMsgBtn.addEventListener('click', function () {
  document.getElementById('pingMsg').innerHTML = "...";
  const reply = ipc.sendSync('ping-pong', 'ping');
  const message = `Got reply: ${reply}`;
  document.getElementById('pingMsg').innerHTML = message;
});

// open a new window
const newWindowBtn = document.getElementById('emojiSrc');
newWindowBtn.addEventListener('click', function (event) {
  const windowID = BrowserWindow.getFocusedWindow().id;
  const parentWindow = BrowserWindow.fromId(windowID);
  const pageUrl = 'https://api.github.com/emojis';

  let child = new BrowserWindow({
    width: 800,
    height: 500,
    parent: parentWindow,
    modal: true,
    show: false,
    title: pageUrl
  });
  child.loadURL(pageUrl);
  child.show();
  child.on('close', function () { child = null });
});
