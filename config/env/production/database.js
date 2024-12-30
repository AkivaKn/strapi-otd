module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'ep-falling-sunset-a98pw3ci-pooler.gwc.azure.neon.tech'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'off-the-derech'),
			user: env('DATABASE_USERNAME', 'off-the-derech_owner'),
			password: env('DATABASE_PASSWORD', 'TalLpOxgv97q'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
