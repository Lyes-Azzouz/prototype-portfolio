const path = require("path");

module.exports = {
  entry: "./src/index.js", // Chemin vers le point d'entrée de votre application
  output: {
    path: path.resolve(__dirname, "dist"), // Dossier de sortie pour les fichiers bundle
    filename: "bundle.js", // Nom du fichier de bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Utilisation de Babel pour la transpilation
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Gestion des fichiers CSS
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader", // Gestion des fichiers d'images
            options: {
              outputPath: "images", // Le dossier de sortie pour les images
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"], // Gestion des fichiers SCSS
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Extensions de fichiers à résoudre
    fallback: {
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      assert: require.resolve("assert"),
      url: require.resolve("url"),
      util: require.resolve("util/"),
    },
  },
  mode: "development", // Mode de développement
};
