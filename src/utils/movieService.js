import client from './client';

const movieFields = `
  title,
  'actor': actor->title
`;

export const getMovies = async () => {
  const movie = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
  return movie;
};
