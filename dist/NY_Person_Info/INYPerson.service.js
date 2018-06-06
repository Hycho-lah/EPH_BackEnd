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
const INYPerson_entity_1 = require("./INYPerson.entity");
let INYPersonService = class INYPersonService {
    constructor(INYPersonRepository) {
        this.INYPersonRepository = INYPersonRepository;
    }
    getAllINYPerson() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.INYPersonRepository.find();
        });
    }
    getINYPersonById(personId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.INYPersonRepository.findOneOrFail({ where: { id: personId } });
        });
    }
    addINYPerson(INYPerson) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.INYPersonRepository.save(INYPerson);
        });
    }
    updateINYPerson(personId, newINYPerson) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedINYPerson = yield this.INYPersonRepository.findOneOrFail({ where: { id: personId } });
            if (selectedINYPerson) {
                yield typeorm_1.getConnection().createQueryBuilder().update(INYPerson_entity_1.INYPersonEntity).set(newINYPerson)
                    .where('id=:id', { id: personId })
                    .execute();
            }
            else {
                return null;
            }
        });
    }
    deleteINYPerson(personId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedINYPerson = yield this.INYPersonRepository.findOneOrFail({ where: { id: personId } });
            if (selectedINYPerson) {
                yield typeorm_1.getConnection()
                    .createQueryBuilder()
                    .delete()
                    .from(INYPerson_entity_1.INYPersonEntity)
                    .where('id = :id', { id: personId })
                    .execute();
                return 'delete success';
            }
            else {
                return 'delete fail';
            }
        });
    }
};
INYPersonService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('INYPersonProvider')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], INYPersonService);
exports.INYPersonService = INYPersonService;
//# sourceMappingURL=INYPerson.service.js.map