import { h } from 'vue';
const wrapperMap = new Map();

export const useWrapComponents = (Component, route) => {
  debugger;
  let wrapper = null;
  if (Component) {
    const wrapperName = route.name;
    if (wrapperMap.has(wrapperName)) {
      wrapper = wrapperMap.get(wrapperName);
    } else {
      wrapper = {
        name: wrapperName,
        render() {
          return h('div', { className: 'app-main-inner' }, Component);
        }
      };
      wrapperMap.set(wrapperName, wrapper);
    }
    return h(wrapper);
  }
};
