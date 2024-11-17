const { contextBridge, ipcRenderer } = require('electron')

window.nativeApi = {
    send: (channel, args) => {
        ipcRenderer.send(channel, ...args);

    },
    receive: (channel, func) => {
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
}

contextBridge.exposeInMainWorld('nativeApi', window.nativeApi)

