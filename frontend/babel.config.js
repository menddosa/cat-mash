module.exports = api => {
  api.cache(true)

  const presets = [
    ['@babel/preset-env', { corejs: 3, targets: { esmodules: true }, useBuiltIns: 'usage' }],
    ['@babel/preset-react'],
    ['@babel/preset-typescript'],
  ]

  const plugins = [
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-object-rest-spread'],
  ]

  return { presets, plugins }
}
