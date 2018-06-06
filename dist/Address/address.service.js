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
const typeorm_1 = require("typeorm");
const address_entity_1 = require("./address.entity");
let AddressService = class AddressService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    getAllAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addressRepository.find();
        });
    }
    getAddressById(addressId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addressRepository.findOneOrFail({ where: { id: addressId } });
        });
    }
    addAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addressRepository.save(address);
        });
    }
    updateAddress(addressId, newAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedAddress = yield this.addressRepository.findOneOrFail({ where: { id: addressId } });
            if (selectedAddress) {
                yield typeorm_1.getConnection().createQueryBuilder().update(address_entity_1.AddressEntity).set(newAddress)
                    .where('id = :id', { id: addressId })
                    .execute();
                return yield this.addressRepository.findOneOrFail({ where: { id: addressId } });
            }
            else {
                return null;
            }
        });
    }
    deleteAddress(addressId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedAddress = yield this.addressRepository.findOneOrFail({ where: { id: addressId } });
            if (selectedAddress) {
                yield typeorm_1.getConnection().createQueryBuilder().delete().from(address_entity_1.AddressEntity)
                    .where('id = :id', { id: addressId })
                    .execute();
                return 'delete success';
            }
            else {
                return 'delete fail';
            }
        });
    }
};
AddressService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('AddressProvider')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AddressService);
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map