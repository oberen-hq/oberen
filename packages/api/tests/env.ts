/**
 * Load a test environment
 */
process.env.SILENCE_REPORT = "true";
process.env.PORT = "4000";
process.env.NODE_ENV = "testing";
process.env.SERVER_TIMEOUT = "1080000";

/**
 * Postgresql
 */

process.env.DATABASE_HOST = "localhost";
process.env.DATABASE_USERNAME = "test_user";
process.env.DATABASE_PASSWORD = "test_password";
process.env.DATABASE_NAME = "test_database";

/**
 * Redis
 */

process.env.REDIS_URL = "redis://localhost:6379";

/**
 * Secrets
 */

process.env.COOKIE_NAME = "qid";
process.env.COOKIE_SECRET = "test_secret";
