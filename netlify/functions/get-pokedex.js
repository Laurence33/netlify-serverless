const { default: axios } = require('axios');

exports.handler = async () => {
  const POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto';

  const response = await axios(POKE_API);
  const data = await response.data;
  console.log(data);
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
