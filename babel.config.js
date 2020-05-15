module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      "@babel/preset-env",
      "@babel/preset-react",
      // preset-flow must be the last
      "@babel/preset-flow"
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      ["@babel/plugin-transform-modules-commonjs"]
    ]
  };
};
