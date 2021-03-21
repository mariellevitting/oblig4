import client from './client';

const movieFields = `
  title,
  'actor': actor->name
`;

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "event"]{${movieFields}}`);
  return data;
};
