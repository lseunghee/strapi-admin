"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'mysql',
        connection: {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 3306),
            database: env('DATABASE_NAME', 'todolist'),
            user: env('DATABASE_USERNAME', 'root'),
            password: env('DATABASE_PASSWORD', 'tmdgml3928'),
            ssl: env.bool('DATABASE_SSL', true),
        },
    },
});
