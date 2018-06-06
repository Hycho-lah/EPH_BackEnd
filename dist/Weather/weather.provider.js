"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weather_entity_1 = require("./weather.entity");
exports.weatherProvider = {
    provide: 'WeatherProvider',
    useFactory: (connection) => connection.getRepository(weather_entity_1.WeatherEntity),
    inject: ['DbConnectionToken'],
};
//# sourceMappingURL=weather.provider.js.map