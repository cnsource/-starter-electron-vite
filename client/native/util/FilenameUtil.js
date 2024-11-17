function extractPathAndFileName(filePath) {
    // 使用正则表达式匹配最后一个斜杠的位置
    const lastSlashIndex = filePath.lastIndexOf('\\');

    // 如果找不到斜杠，则认为整个字符串是文件名
    if (lastSlashIndex === -1) {
        return {
            path: '',
            fileName: filePath
        };
    }

    // 提取路径和文件名
    const path = filePath.substring(0, lastSlashIndex);
    const fileName = filePath.substring(lastSlashIndex + 1);

    return {
        path,
        fileName
    };
}

exports = {
    extractPathAndFileName
}