const fs = require('fs');
const path = require('path');
const loader = require('@tailwindcss/turbopack');

const inputPath = path.resolve(__dirname, '../app/tailwind.input.css');
const outputPath = path.resolve(__dirname, '../app/compiled.css');

const input = fs.readFileSync(inputPath, 'utf-8');

const context = {
  async: () => (err, res) => {
    if (err) {
      console.error('Tailwind compilation error:', err);
      process.exit(1);
    }
    fs.writeFileSync(outputPath, res, 'utf-8');
    console.log('✓ Tailwind CSS compiled successfully (' + res.length + ' bytes)');
  },
  getOptions: () => ({ optimize: false }),
  resourcePath: inputPath,
  resource: inputPath,
  addDependency: () => {},
  addContextDependency: () => {}
};

loader.call(context, input);
