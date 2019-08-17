const rootImportOpts = {
    root: __dirname,
    rootPathPrefix: "~/",
    rootPathSuffix: "src/jsx"
}

module.exports = {
    plugins: [["babel-plugin-root-import", rootImportOpts]],
    presets: ["@babel/preset-env", "@babel/preset-react"],
};
