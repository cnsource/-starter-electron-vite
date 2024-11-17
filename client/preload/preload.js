const { contextBridge } = require('electron')
const { ipcRenderer } = require('electron')
const { writeContentToFile } = require("../ipcMain/fs");

window.client = {
    fs: {
        writeContentToFile(filePath, content) {
            if (!filePath) {
                throw Error("No file path")
            }
            ipcRenderer.send(writeContentToFile, [filePath, content]);
        }
    }
}

contextBridge.exposeInMainWorld('client', window.client)

