// src-electron/main.js
const { app, BrowserWindow, session } = require('electron')
const { join } = require('path')
const path = require('node:path')
require('./env')
require('./ipcMain/index')

// 创建浏览器窗口时，调用这个函数。
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        //如果不添加，则使用的是默认的图标
        icon: join(__dirname,'../public/vite.svg'),
        webPreferences: {
            preload: path.join(__dirname, './preload/preload.js')
        }
    })

    // win.loadURL('http://localhost:3000')
    // development模式
    if(process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL).then()
        // 开启调试台
        win.webContents.openDevTools()
    }else {
        win.loadFile('dist/index.html').then()
    }
}

// Electron 会在初始化后并准备
app.whenReady().then(async () => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

    await session.defaultSession.loadExtension(
        path.resolve(__dirname, "./devtools")
    );
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
