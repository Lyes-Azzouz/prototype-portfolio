const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Importez HtmlWebpackPlugin

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },

      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      assert: require.resolve("assert"),
      url: require.resolve("url"),
      util: require.resolve("util/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", // Spécifiez le chemin du modèle HTML
    }),
  ], // Ajoutez le plugin HtmlWebpackPlugin
  mode: "development",
};
