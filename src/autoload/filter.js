let importAll = require.context('@/filters', true, /index\.js$/);
importAll.keys().map((path) => {
    importAll(path).default || importAll(path);
});
