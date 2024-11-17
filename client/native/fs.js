const { ipcMain } = require("electron");
const fs = require("fs-extra");
const path = require("path");

ipcMain.on("fs:writeContentToFile", (event, filePath, content) => {
    const fs = require('fs-extra')
    const path = require('path');

    const fileAbsolutePath = path.resolve(path.resolve(filePath))
    // 提取目录路径
    const dirPath = path.dirname(fileAbsolutePath);

    // 创建目录
    fs.ensureDir(dirPath)
        .then(() => console.log('Directory ensured!'))
        .catch(err => console.error(err));

    // 创建文件
    fs.ensureFile(fileAbsolutePath)
        .then(() => console.log('File ensured!'))
        .catch(err => console.error(err));

    fs.writeJsonSync(fileAbsolutePath, {name: 'fs-extra'})
})