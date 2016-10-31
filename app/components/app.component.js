"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const mision_service_1 = require("../services/mision.service");
let AppComponent = class AppComponent {
    constructor(_misionService) {
        this._misionService = _misionService;
        this.mision = _misionService.getRandomMision();
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        providers: [mision_service_1.MisionService],
        template: `<h1>Mision:</h1>
                <div>
                    <h3>{{mision.title}}</h3>
                    <article>
                        {{mision.text}}
                    </article>
                </div>
                <div>
                    <button>Next >></button>
                </div>
`
    }), 
    __metadata('design:paramtypes', [mision_service_1.MisionService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map