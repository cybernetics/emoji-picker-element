import cjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import svelte from 'rollup-plugin-svelte'

const baseConfig = {
  plugins: [
    resolve(),
    cjs(),
    json(),
    svelte({
      customElement: true,
      css: true
    })
  ]
}

const formats = ['es', 'cjs']
const entryPoints = [
  {
    input: './src/index.js',
    output: 'index.js'
  }
]

export default formats.map(format => (entryPoints.map(({ input, output }) => ({
  ...baseConfig,
  input,
  output: {
    format,
    file: `dist/${format}/${output}`
  }
})))).flat()