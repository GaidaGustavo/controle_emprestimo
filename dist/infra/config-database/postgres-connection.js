"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresConnection = void 0;
const pg_promise_1 = __importDefault(require("pg-promise"));
class PostgresConnection {
    constructor(configDatabase) {
        const cn = {
            host: configDatabase.host,
            port: 5432,
            database: configDatabase.database,
            user: configDatabase.user,
            password: configDatabase.password,
        };
        this.pgp = (0, pg_promise_1.default)()(cn);
    }
    execute(statement, params) {
        return this.pgp.query(statement, params);
    }
    close() {
        return this.pgp.$pool.end();
    }
}
exports.PostgresConnection = PostgresConnection;
