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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const weather_service_1 = require("./weather.service");
let WeatherController = class WeatherController {
    constructor(weatherService) {
        this.weatherService = weatherService;
    }
    getAllWeather() {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.weatherService.getAllWeather();
            return msg;
        });
    }
    getWeatherById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.weatherService.getWeatherById(params.id);
            return msg;
        });
    }
    addWeather(weather) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.weatherService.addWeather(weather);
            return msg;
        });
    }
    updateWeather(newWeather, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.weatherService.updateWeather(newWeather, params.id);
            return msg;
        });
    }
    deleteWeather(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.weatherService.deleteWeather(params.id);
            return msg;
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeatherController.prototype, "getAllWeather", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeatherController.prototype, "getWeatherById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeatherController.prototype, "addWeather", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WeatherController.prototype, "updateWeather", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeatherController.prototype, "deleteWeather", null);
WeatherController = __decorate([
    common_1.Controller('weather'),
    __metadata("design:paramtypes", [weather_service_1.WeatherService])
], WeatherController);
exports.WeatherController = WeatherController;
//# sourceMappingURL=weather.controller.js.map