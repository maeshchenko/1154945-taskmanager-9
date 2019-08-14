const path = require(`path`);

module.exports = {
  mode: `development`, // Режим сборки
  entry: `./src/main.js`, // Точка входа приложения
  devtool: `eval`, // Включаем source-map для удобной отладки
  output: { // Настройка выходного файла
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  }
};
