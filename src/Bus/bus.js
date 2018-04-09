const bus = {
    install: function (Vue, options) {
        const bus = new Vue(); // 一个 vue 实例 就是 bus  1
        if (window.bus === undefined) {
            window.bus = bus;
        }
        if (Vue.bus === undefined) {
            Vue.prototype.bus = bus; // 2
        }
    }
}
export default bus