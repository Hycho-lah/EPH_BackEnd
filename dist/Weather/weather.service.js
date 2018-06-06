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
const weather_entity_1 = require("./weather.entity");
const typeorm_1 = require("typeorm");
let WeatherService = class WeatherService {
    constructor(weatherRepository) {
        this.weatherRepository = weatherRepository;
    }
    getAllWeather() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.weatherRepository.find();
        });
    }
    getWeatherById(weatherId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.weatherRepository.findOneOrFail({ where: { id: weatherId } });
        });
    }
    addWeather(weather) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.weatherRepository.save(weather);
        });
    }
    updateWeather(newWeather, weatherId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedWeather = yield this.weatherRepository.findOneOrFail({ where: { id: weatherId } });
            if (selectedWeather) {
                yield typeorm_1.getConnection().createQueryBuilder()
                    .update(weather_entity_1.WeatherEntity)
                    .set(newWeather)
                    .where('id=:id', { id: weatherId })
                    .execute();
                return yield this.weatherRepository.findOneOrFail({ where: { id: weatherId } });
            }
            else {
                return null;
            }
        });
    }
    deleteWeather(weatherId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedWeather = yield this.weatherRepository.findOneOrFail({ where: { id: weatherId } });
            if (selectedWeather) {
                yield typeorm_1.getConnection().createQueryBuilder()
                    .delete()
                    .from(weather_entity_1.WeatherEntity)
                    .where('id = :id', { id: weatherId })
                    .execute();
                return 'delete success';
            }
            else {
                return 'delete fail';
            }
        });
    }
};
WeatherService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('weatherProvider')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], WeatherService);
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map