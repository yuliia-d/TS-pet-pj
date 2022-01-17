export const autobind = (
  _: any,
  _2: string,
  descriptor: PropertyDescriptor
) => ({
  configurable: true,
  get() {
    return descriptor.value.bind(this);
  }
});
