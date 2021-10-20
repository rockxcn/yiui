let importAll = require.context('@/directives', true, /index\.js$/);
importAll.keys().map((path) => {
    importAll(path).default || importAll(path);
});
