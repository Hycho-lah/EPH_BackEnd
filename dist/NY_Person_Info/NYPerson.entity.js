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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const address_entity_1 = require("../Address/address.entity");
let NYPersonEntity = class NYPersonEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], NYPersonEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], NYPersonEntity.prototype, "oldParticipantId", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], NYPersonEntity.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], NYPersonEntity.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column('char'),
    __metadata("design:type", Number)
], NYPersonEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], NYPersonEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column('date'),
    __metadata("design:type", Object)
], NYPersonEntity.prototype, "birthDate", void 0);
__decorate([
    typeorm_1.Column('tinyint'),
    __metadata("design:type", Object)
], NYPersonEntity.prototype, "sex", void 0);
__decorate([
    typeorm_1.ManyToOne(type => address_entity_1.AddressEntity, address => address.NYPerson),
    __metadata("design:type", NYPersonEntity)
], NYPersonEntity.prototype, "addressId", void 0);
NYPersonEntity = __decorate([
    typeorm_1.Entity()
], NYPersonEntity);
exports.NYPersonEntity = NYPersonEntity;
//# sourceMappingURL=NYPerson.entity.js.map