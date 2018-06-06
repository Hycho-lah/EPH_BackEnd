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
const NYPerson_entity_1 = require("../NY_Person_Info/NYPerson.entity");
let AddressEntity = class AddressEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AddressEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", Number)
], AddressEntity.prototype, "houseId", void 0);
__decorate([
    typeorm_1.Column('char'),
    __metadata("design:type", Object)
], AddressEntity.prototype, "state", void 0);
__decorate([
    typeorm_1.Column('char'),
    __metadata("design:type", Object)
], AddressEntity.prototype, "county", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", Object)
], AddressEntity.prototype, "city", void 0);
__decorate([
    typeorm_1.Column('char'),
    __metadata("design:type", Object)
], AddressEntity.prototype, "zipCode", void 0);
__decorate([
    typeorm_1.Column('float'),
    __metadata("design:type", Number)
], AddressEntity.prototype, "latitude", void 0);
__decorate([
    typeorm_1.Column('float'),
    __metadata("design:type", Number)
], AddressEntity.prototype, "longitude", void 0);
__decorate([
    typeorm_1.OneToMany(type => NYPerson_entity_1.NYPersonEntity, item => item.addressId),
    __metadata("design:type", Array)
], AddressEntity.prototype, "NYPerson", void 0);
AddressEntity = __decorate([
    typeorm_1.Entity()
], AddressEntity);
exports.AddressEntity = AddressEntity;
//# sourceMappingURL=address.entity.js.map