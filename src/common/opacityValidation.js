const MIN = 0;

const MAX = 1;

export default function opacityValidation(props, propName) {
  if (props[propName] < MIN || props[propName] > MAX) {
    return new Error('Invalid value for opacity');
  }
}
