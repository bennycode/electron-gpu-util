const {app, BrowserWindow} = require('electron');

app.commandLine.appendSwitch('disable-gpu-driver-bug-workarounds');
app.commandLine.appendSwitch('enable-accelerated-mjpeg-decode');
app.commandLine.appendSwitch('enable-accelerated-video-decode');
app.commandLine.appendSwitch('enable-gpu-rasterization');
app.commandLine.appendSwitch('enable-native-gpu-memory-buffers');
app.commandLine.appendSwitch('enable-oop-rasterization');
app.commandLine.appendSwitch('ignore-gpu-blocklist');

app.on('ready', () => {
  const win = new BrowserWindow({ show: true });
  win.loadURL('chrome://gpu');
});