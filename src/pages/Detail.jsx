import React, { useContext, useEffect, useState } from 'react';
import DetailCast from '../components/Detail/DetailCast';
import DetailMovie from '../components/Detail/DetailMovie';
import DetailStory from '../components/Detail/DetailStory';
import { apiDetail, apiCast, apiSimilar } from '../func/WebAPI';
import {
  detailDataConvert,
  castDataConvert,
  basicDataConvert,
} from '../func/convert';
import { MovieContext } from '../func/context';
import SimilarList from '../components/Detail/SimilarList';
import DetailCompanies from '../components/Detail/DetailCompanies';

const Detail = () => {
  const { detailID, setDetailOpen } = useContext(MovieContext);
  const [detail, setDetail] = useState([]);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);

  const [isLoadingGetDetail, setIsLoadingGetDetail] = useState(false);

  useEffect(() => {
    setIsLoadingGetDetail(true);

    const scrollBar = document.querySelector('.detail');
    const scroll = () => {
      scrollBar && scrollBar.scrollTo(0, 0);
    };

    async function getDetail() {
      try {
        const detailData = (await apiDetail(detailID)).data;
        const castData = (await apiCast(detailID)).data.cast;
        const similarData = (await apiSimilar(detailID)).data.results;
        setDetail(detailDataConvert(detailData));
        setCast(castDataConvert(castData));
        setSimilar(basicDataConvert(similarData));
        setIsLoadingGetDetail(false);
        scroll();
      } catch (error) {
        console.log(error);
      }
    }

    getDetail();
  }, [detailID]);

  return (
    <article className="detailContainer">
      <span
        className="closeBtn"
        onClick={() => {
          setDetailOpen(false);
        }}
      ></span>
      <section
        className="closeArea"
        onClick={() => {
          setDetailOpen(false);
        }}
      ></section>
      {isLoadingGetDetail ? (
        <div className="detailLoading">
          <span className="loadingIcon"></span>
        </div>
      ) : (
        <ul className="detail">
          <li className="detail__backdrop">
            <img src={detail.backdrop} alt="" />
            <div className="mask"></div>
          </li>
          <li className="detail__content">
            <DetailMovie item={detail} />
            <DetailCast item={cast} />
            <DetailStory item={detail} />
            <DetailCompanies item={detail.companiesLogo} />
            <SimilarList movie={similar} title={'Similar'} />
          </li>
        </ul>
      )}
    </article>
  );
};

export default Detail;
