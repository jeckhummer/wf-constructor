export const decorate = function (object, before = () => {}, after = () => {}) {
    let decoratedObject = {};
    Object
        .keys(object)
        .forEach((key) => {
            decoratedObject[key] = (...args) => {
                before(object, key, args);
                const result = object[key].bind(object, ...args)();
                after(object, key, args, result);
                return result;
            }
        });
    return decoratedObject;
};