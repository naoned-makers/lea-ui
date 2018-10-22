let env;

export default {
  load: () =>
    fetch('/env.json')
      .then(data => data.json())
      .then(json => {
        env = json;
      }),
  get: () => env
};
