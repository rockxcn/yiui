// 自动导入插件（勿动）
// =====================================================
let importAll = require.context('@/plugins', true, /\.js$/);
importAll.keys().map((path) => {
    importAll(path).default || importAll(path);
});
// =====================================================
