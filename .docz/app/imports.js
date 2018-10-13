export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'components/button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-button-index" */ 'components/button/index.mdx'),
}
