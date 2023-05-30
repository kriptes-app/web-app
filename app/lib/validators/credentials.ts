type Parameter = string | undefined;

interface Credentials {
  googleClientId: Parameter;
  googleClientSecret: Parameter;
  discordClientId: Parameter;
  discordClientSecret: Parameter;
}

function validateParameter(parameter: Parameter): boolean {
  if (parameter !== '' || parameter !== undefined) return true;

  return false;
}

export default function validateCredentials(): Credentials {
  let googleClientId = process.env.GOOGLE_CLIENT_ID;
  let googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
  let discordClientId = process.env.DISCORD_CLIENT_ID;
  let discordClientSecret = process.env.DISCORD_CLIENT_SECRET;

  if (!validateParameter(googleClientId))
    throw new Error(`Invalid Google clientId provided.`);

  if (!validateParameter(googleClientSecret))
    throw new Error('Invalid Google clientSecret provided');

  if (!validateParameter(discordClientId))
    throw new Error('Invalid Discord clientId provided');

  if (!validateParameter(discordClientSecret))
    throw new Error('Invaid Discord clientSecret provided');

  return {
    googleClientId,
    googleClientSecret,
    discordClientId,
    discordClientSecret,
  };
}
