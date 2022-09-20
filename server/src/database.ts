import knex, { Knex } from 'knex';

import * as dotenv from "dotenv";
dotenv.config( { path: __dirname + '/.env' } );

// CONFIG FOR MAIN DATABASE
/*
const { DB_USER, DB_PASSWORD } = process.env;

const DB_NAME = "postgres";
const DB_HOST = "liradb.compute.dtu.dk"; // "liradbdev.compute.dtu.dk"
const DB_PORT = 5435; // 5432;
*/


// CONFIG FOR VISUALIZATION DATABASE
const { DB_USER_VIS, DB_PASSWORD_VIS } = process.env;

const DB_NAME = "postgres";
const DB_HOST = "liravisualization.postgres.database.azure.com"; // "liradbdev.compute.dtu.dk"
const DB_PORT = 5432; // 5432;
const DB_USER = DB_USER_VIS;
const DB_PASSWORD = DB_PASSWORD_VIS;

export const DATABASE_CONFIG = {
    client: 'pg',
    connection: {
          host : DB_HOST,
          port: DB_PORT,
          user : DB_USER,
          password : DB_PASSWORD,
          database : DB_NAME,
          ssl: true
    },
    debug: true,
    pool: {
        min: 1,
        max: 7,
        "createTimeoutMillis": 3000,
        "acquireTimeoutMillis": 30000,
        "idleTimeoutMillis": 30000,
        "reapIntervalMillis": 1000,
        "createRetryIntervalMillis": 100,
        "propagateCreateError": false
    },
    log: {
        warn(msg: any) { console.log('warning', msg); },
        error(msg: any) { console.log('error', msg); },
        deprecate(msg: any) { console.log('deprecate', msg); },
        debug(msg: any) { console.log('debug', msg); },
    }
}



// http://liradbdev.compute.dtu.dk:5000/match/v1/car/12.5639696,55.7066193;12.5639715,55.7066193;12.5639753,55.7066193
type Func<T> = (db: Knex<any, unknown[]>, ...args: any[]) => Promise<T>;

const databaseQuery = async <T>(func: Func<T>, ...args: any[]): Promise<T> => {
    const database: Knex<any, unknown[]> = knex(DATABASE_CONFIG);
    let res: T;
    try {
        res = await func(database, args);
        await database.destroy();
    } catch (error) {
        console.error(error)
    }
    return res;
}


export default databaseQuery

