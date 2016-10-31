"use strict";
class Checkpoint {
    constructor(obj) {
        this.id = obj && obj.id ? obj.id : 0;
        this.altura = obj && obj.altura ? obj.altura : 0;
        this.time = obj && obj.time ? obj.time : 0;
    }
}
exports.Checkpoint = Checkpoint;
//# sourceMappingURL=Checkpoint.js.map