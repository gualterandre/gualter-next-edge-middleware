export default () =>
  new Response(
    'this is a response that renders on every root path, except if it has anything but an alphanumeric, underscore and dashes. Also, it should not be executed if there are any subpaths.'
  )

export const config = {
  pattern: '^/[*@([a-zA-Z0-9_-])]*(/|/*[^/]*[a-zA-Z0-9_-]*)',
}
