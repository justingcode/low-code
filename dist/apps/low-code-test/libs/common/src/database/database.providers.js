"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseProviders = void 0;
const typeorm_1 = require("typeorm");
const utils_1 = require("../utils");
const naming_strategies_1 = require("./naming.strategies");
const path = require("path");
const { MONGODB_CONFIG, MYSQL_CONFIG } = (0, utils_1.getConfig)();
const MONGODB_DATABASE_CONFIG = {
    ...MONGODB_CONFIG,
    NamedNodeMap: new naming_strategies_1.NamingStrategy(),
    entities: [
        path.join(__dirname, `dist/**/*.${MONGODB_CONFIG.entities}.entity.ts`),
    ],
};
const MYSQL_DATABASE_CONFIG = {
    ...MYSQL_CONFIG,
    namingStrategy: new naming_strategies_1.NamingStrategy(),
    entities: [
        path.join(__dirname, `dist/**/*.${MYSQL_CONFIG.entities}.entity.ts`),
    ],
};
const MONGODB_DATA_SOURCE = new typeorm_1.DataSource(MONGODB_DATABASE_CONFIG);
const MYSQL_DATA_SOURCE = new typeorm_1.DataSource(MYSQL_DATABASE_CONFIG);
exports.DatabaseProviders = [
    {
        provide: 'MONGODB_DATA_SOURCE',
        useFactory: async () => {
            if (!MONGODB_DATA_SOURCE.isInitialized)
                await MONGODB_DATA_SOURCE.initialize();
            return MONGODB_DATA_SOURCE;
        },
    },
    {
        provide: 'MYSQL_DATA_SOURCE',
        useFactory: async () => {
            if (!MYSQL_DATA_SOURCE.isInitialized)
                await MYSQL_DATA_SOURCE.initialize();
            return MYSQL_DATA_SOURCE;
        }
    }
];
//# sourceMappingURL=database.providers.js.map