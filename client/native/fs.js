const { ipcMain } = require("electron");

ipcMain.on("fs:writeContentToFile", (event, filePath, content) => {
    const fs = require('fs');
    const path = require('path');

    // 提取目录路径
    const dirPath = path.dirname(filePath);

    // 如果目录不存在，则递归创建
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    // 写入文件
    fs.writeFileSync(filePath, content, 'utf8');
})