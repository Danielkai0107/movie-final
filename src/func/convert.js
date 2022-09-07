export const basicDataConvert = (results) => {
  const imageUrl = 'https://image.tmdb.org/t/p/original';
  return results.map((item, index) => {
    return {
      number: index + 1,
      id: item.id,
      name: item.original_title,
      date: item.release_date,
      popularity: item.popularity,
      image: imageUrl + item.backdrop_path,
      poster: imageUrl + item.poster_path,
      vote_average: item.vote_average,
      vote_count: item.vote_count,
      overview: item.overview,
    };
  });
};

export const detailDataConvert = (results) => {
  const imageUrl = 'https://image.tmdb.org/t/p/original';

  const companies = results.production_companies.filter(
    (item) => item.logo_path !== null,
  );
  const companiesLogo = companies.map((item) => {
    return { id: item.id, name: item.name, logo: imageUrl + item.logo_path };
  });
  return {
    id: results.id,
    title: results.original_title,
    date: results.release_date,
    popularity: results.popularity,
    backdrop: imageUrl + results.backdrop_path,
    poster: imageUrl + results.poster_path,
    vote_average: results.vote_average,
    vote_count: results.vote_count,
    overview: results.overview,
    companiesLogo: companiesLogo,
    genres: results.genres,
    status: results.status,
  };
};

export const castDataConvert = (results) => {
  const imageUrl = 'https://image.tmdb.org/t/p/original';
  const okCast = results.filter((item) => item.profile_path !== null);
  const cast = okCast.slice(0, 5);
  return cast.map((item) => {
    return {
      id: item.id,
      name: item.name,
      profile: imageUrl + item.profile_path,
    };
  });
};
