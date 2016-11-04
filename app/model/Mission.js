"use strict";
class Mission {
    constructor(obj) {
        this.id = obj && obj.id ? obj.id : -1;
        this.title = obj && obj.title ? obj.title : "Mision";
        this.description = obj && obj.description ? obj.description : "Mision description";
    }
}
exports.Mission = Mission;
//# sourceMappingURL=Mission.js.map