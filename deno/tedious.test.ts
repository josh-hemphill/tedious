import { Connection, ISOLATION_LEVEL, TYPES } from 'tedious';
import { assert, assertNotStrictEquals, assertStrictEquals } from 'asserts';

Deno.test('tedious-test', function (t) {
	t.step('types', () => {
		assert(TYPES);
		assert(TYPES.VarChar);
	});

	t.step('isolationLevel', () => {
		assert(ISOLATION_LEVEL);
		assert(ISOLATION_LEVEL.READ_UNCOMMITTED);
	});

	t.step('connection', () => {
		assert(Connection);
	});

	t.step('connectionDoesNotModifyPassedConfig', () => {
		const config = {
			server: 'localhost',
			userName: 'sa',
			password: 'sapwd',
			options: {
				encrypt: false,
				port: 1234,
				cryptoCredentialsDetails: {
					ciphers: 'DEFAULT',
				},
			},
		};

		const connection = new Connection(config);

		assertNotStrictEquals(connection.config, config);
		assertNotStrictEquals(connection.config.options, config.options);

		// Test that we did not do a deep copy of the cryptoCredentialsDetails,
		// as we never modify that value inside tedious.
		assertStrictEquals(
			connection.config.options.cryptoCredentialsDetails,
			config.options.cryptoCredentialsDetails,
		);
	});
});
