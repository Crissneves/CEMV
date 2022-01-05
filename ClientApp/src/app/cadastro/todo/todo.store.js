"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var estado = { todolist: [] };
//estado =
//{
//  todolist: []
//};
var Store = /** @class */ (function () {
    function Store() {
        this.subject = new rxjs_1.BehaviorSubject(estado);
        this.store = this.subject.asObservable();
    }
    Object.defineProperty(Store.prototype, "value", {
        get: function () {
            return this.subject.value;
        },
        enumerable: false,
        configurable: true
    });
    Store.prototype.set = function (name, state) {
        var _a;
        this.subject.next(__assign(__assign({}, this.value), (_a = {}, _a[name] = estado, _a)));
    };
    Store.prototype.getToDoList = function () {
        return this.store.pipe((0, operators_1.map)(function (store) { return store.todolist; }));
    };
    return Store;
}());
exports.Store = Store;
//# sourceMappingURL=todo.store.js.map