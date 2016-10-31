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
const router_1 = require('@angular/router');
const core_1 = require('@angular/core');
const forms_1 = require('@angular/forms');
const platform_browser_1 = require('@angular/platform-browser');
const common_1 = require('@angular/common');
const app_component_1 = require('../components/app.component');
const checkpoints_amount_component_1 = require("../components/checkpoints-amount.component");
const configure_checkpoints_component_1 = require("../components/configure-checkpoints.component");
const mission_component_1 = require("../components/mission.component");
const routes = [
    { path: '', component: mission_component_1.MissionComponent },
    { path: 'chekpoints', component: checkpoints_amount_component_1.CheckpointsAmountComponent },
    { path: 'chekpoints-config/:amount', component: configure_checkpoints_component_1.ConfigureCheckpointsComponent },
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(routes)],
        declarations: [app_component_1.AppComponent, checkpoints_amount_component_1.CheckpointsAmountComponent, configure_checkpoints_component_1.ConfigureCheckpointsComponent, mission_component_1.MissionComponent],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            { provide: common_1.APP_BASE_HREF, useValue: '/' }
        ],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map