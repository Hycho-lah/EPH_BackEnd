"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_entity_1 = require("./address.entity");
exports.AddressProvider = {
    provide: 'AddressProvider',
    useFactory: (connection) => connection.getRepository(address_entity_1.AddressEntity),
    inject: ['DbConnectionToken'],
};
//# sourceMappingURL=address.provider.js.map