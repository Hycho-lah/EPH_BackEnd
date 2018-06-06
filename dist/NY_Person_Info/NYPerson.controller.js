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
const NYPerson_service_1 = require("./NYPerson.service");
let NYPersonController = class NYPersonController {
    constructor(INYPersonServce) {
        this.INYPersonServce = INYPersonServce;
    }
    getAllINYPerson() {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.INYPersonServce.getAllINYPerson();
            return msg;
        });
    }
    getINYPersonById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.INYPersonServce.getINYPersonById(params.id);
            return msg;
        });
    }
    addINYPerson(INYPerson) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.INYPersonServce.addINYPerson(INYPerson);
            return msg;
        });
    }
    updateINYPerson(NewINYPerson, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.INYPersonServce.updateINYPerson(params.id, NewINYPerson);
            return msg;
        });
    }
    deleteINYPerson(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const msg = yield this.INYPersonServce.deleteINYPerson(params.id);
            return msg;
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NYPersonController.prototype, "getAllINYPerson", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NYPersonController.prototype, "getINYPersonById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NYPersonController.prototype, "addINYPerson", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NYPersonController.prototype, "updateINYPerson", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NYPersonController.prototype, "deleteINYPerson", null);
NYPersonController = __decorate([
    common_1.Controller('INYPerson'),
    __metadata("design:paramtypes", [NYPerson_service_1.NYPersonService])
], NYPersonController);
exports.NYPersonController = NYPersonController;
//# sourceMappingURL=NYPerson.controller.js.map