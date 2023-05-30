const { default: axios } = require('axios');

exports.handler = async (event, context) => {
  const eventBody = JSON.parse(event.body);
  const POKE_API = 'https://pokeapi.co/api/v2/pokedex/' + eventBody.region;

  const response = await axios(POKE_API);
  const data = await response.data.pokemon_entries;
  console.log(data);
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
