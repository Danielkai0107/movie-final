import React, { useContext, useEffect, useState } from 'react';
import VerticalList from '../components/HomePage/VerticalList';
import HomePoster from '../components/HomePage/HomePoster';
import HorizontalList from '../components/HomePage/HorizontalList';
import { apiPopular, apiTopRate, apiUpcoming } from '../func/WebAPI';
import { basicDataConvert } from '../func/convert';
import Detail from './Detail';
import { MovieContext } from '../func/context';

const HomePage = () => {
  const { detailOpen } = useContext(MovieContext);
  const [popular, setPopular] = useState([]);
  const [topRate, setTopRate] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [isLoadingGetMe, setIsLoadingGetMe] = useState(true);

  useEffect(() => {
    setIsLoadingGetMe(true);

    async function getData() {
      try {
        const popularData = (await apiPopular()).data.results;
        const topRateData = (await apiTopRate()).data.results;
        const upcomingData = (await apiUpcoming()).data.results;
        setPopular(basicDataConvert(popularData));
        setTopRate(basicDataConvert(topRateData));
        setUpcoming(basicDataConvert(upcomingData));
        setIsLoadingGetMe(false);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <>
      {isLoadingGetMe ? (
        <article className="homeLoading">
          <span></span>
        </article>
      ) : (
        <main className="home">
          <HomePoster movie={upcoming} />
          <HorizontalList movie={topRate} title={'Top Rate'} />
          <VerticalList movie={upcoming} title={'Upcoming'} />
          <HorizontalList movie={popular} title={'Popular'} />
          {detailOpen && <Detail />}
        </main>
      )}
    </>
  );
};

export default HomePage;
