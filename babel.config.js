module.exports = {
  presets: [
    "@babel/preset-env",
    // Configura o preset do React para usar o novo JSX Transform automaticamente
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
  // Plugin essencial para o styled-components funcionar corretamente
  plugins: ["babel-plugin-styled-components"],
};
