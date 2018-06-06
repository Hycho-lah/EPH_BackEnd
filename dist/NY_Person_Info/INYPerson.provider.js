"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const INYPerson_entity_1 = require("./INYPerson.entity");
exports.INYPersonProvider = {
    provide: 'INYPersonProvider',
    useFactory: (connection) => connection.getRepository(INYPerson_entity_1.INYPersonEntity),
    inject: ['DbConnectionToken'],
};
//# sourceMappingURL=INYPerson.provider.js.map