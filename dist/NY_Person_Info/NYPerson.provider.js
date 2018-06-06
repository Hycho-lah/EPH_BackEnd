"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NYPerson_entity_1 = require("./NYPerson.entity");
exports.NYPersonProvider = {
    provide: 'NYPersonProvider',
    useFactory: (connection) => connection.getRepository(NYPerson_entity_1.NYPersonEntity),
    inject: ['DbConnectionToken'],
};
//# sourceMappingURL=NYPerson.provider.js.map