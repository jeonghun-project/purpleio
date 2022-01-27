"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WroungTypeException = void 0;
const common_1 = require("@nestjs/common");
class WroungTypeException extends common_1.HttpException {
    constructor() {
        super('WroungType', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.WroungTypeException = WroungTypeException;
//# sourceMappingURL=wroungType.exception.js.map