const { app, BrowserWindow } = require('electron')
const path = require('path')

app.name = 'Hollys student'

function createWindow() {
  const win = new BrowserWindow({
    width: 820,
    height: 780,
    minWidth: 600,
    minHeight: 600,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
