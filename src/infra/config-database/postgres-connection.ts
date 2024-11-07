import pgp from "pg-promise";
import { ConfigDatabase } from "./config-database";
import { Connection } from "./connection";

export class PostgresConnection implements Connection {

    protected pgp: any;

    constructor(configDatabase: ConfigDatabase) {
        const cn = {
            host: configDatabase.host,
            port: 5432,
            database: configDatabase.database,
            user:configDatabase.user,
            password: configDatabase.password,
        };
        this.pgp = pgp()(cn); 
    }

    execute(statement: string, params?: any[]): Promise<any[]> {
        return this.pgp.query(statement, params);
    }

    close(): Promise<void> {
        return this.pgp.$pool.end();
    }

}