const defaultState = {
  list: [
    'react',
    'koa',
    'ssr'
  ]
};

export default function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
