'use client';
import Link from 'next/link';
// Education 컴포넌트
import React, { useEffect, useState } from 'react';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import ModifiedGlasses_goldtori from '../../../public/icons/modifiedglasses_goldtori.svg';
import Clickheart2 from '@/public/icons/clickheart2.svg';
import { getEducationsData } from '@/api/education/educationApi';
import Pagination from '@/components/molecules/pagination/Pagination';
import { deleteEducationBookmarkApi, postEducationBookmarkApi } from '@/api/education/educationApi';

export type TEducation = {
  id: number;
  title: string;
  content: string;
  bookmarked: boolean;
};

export type TEducationsApiResponse = {
  content: TEducation[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};
const Education = () => {
  const [EducationData, setEducationData] = useState<TEducation[] | undefined>([]);

  //페이지
  const [pageNum, setPageNum] = useState(0); //현재 페이지
  const [pageTotalNum, setPageTotalNum] = useState(0); //총 페이지 수

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      let truncatedText = text.slice(0, maxLength) + '...';
      let modifiedText = truncatedText.slice(0, 29) + '\n' + truncatedText.slice(29);
      return modifiedText;
    }
  };

  // onHeartClick는 비동기 함수로, 교육 항목의 북마크 상태를 토글하는 역할을 합니다.
  const onHeartClick = async (id: number, bookmarked: boolean) => {
    try {
      let apiResult;
      // 만약 해당 교육 항목이 이미 북마크되어 있다면,
      if (bookmarked) {
        // 북마크를 제거하는 API를 호출합니다.
        apiResult = await deleteEducationBookmarkApi(id, 'EDU_CONTENT');
      } else {
        // 아니라면, 북마크를 추가하는 API를 호출합니다.
        apiResult = await postEducationBookmarkApi(id, 'EDU_CONTENT');
      }
      // API 호출 결과가 정상적으로 반환되었다면,
      if (apiResult !== undefined) {
        // 해당 교육 항목의 북마크 상태를 업데이트합니다.
        setEducationData(EducationData?.map((item) => (item.id === id ? { ...item, bookmarked: !bookmarked } : item)));
      } else {
        // API 호출 결과가 정상적으로 반환되지 않았다면, 사용자에게 로그인하라는 메시지를 출력합니다.
        console.log('로그인 해주세요');
      }
    } catch (error) {
      // API 호출 중 에러가 발생하면, 콘솔에 에러 메시지를 출력합니다.
      console.error('Error fetching bankBookmark:', error);
    }
  };

  // fetchData는 비동기 함수로, 교육 목록 데이터를 API에서 가져오는 역할을 합니다.
  const fetchData = async () => {
    try {
      // getEducationsData 함수를 호출하여 API에서 데이터를 가져옵니다.
      // 이 때, 페이지 사이즈를 8로 설정하고, 현재 페이지 번호를 pageNum으로 설정합니다.
      const data = await getEducationsData(`size=8&page=${pageNum}`);
      if (data) {
        // API 응답에서 총 페이지 수를 가져와 setPageTotalNum에 설정합니다.
        setPageTotalNum(data.totalPages);
        // API 응답에서 교육 목록 데이터를 가져와 setEducationData에 설정합니다.
        setEducationData(data.content);
      }
    } catch (error) {
      // API 호출 중 에러가 발생하면, 콘솔에 에러 메시지를 출력합니다.
      console.error('Error fetching bankListFetchData:', error);
    }
  };

  // useEffect는 React의 Hook으로, 컴포넌트가 렌더링될 때 특정 작업을 수행하도록 설정하는 역할을 합니다.
  useEffect(() => {
    // 컴포넌트가 렌더링될 때 fetchData 함수를 호출하여 교육 목록 데이터를 가져옵니다.
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps는 ESLint 경고를 무시하는 주석입니다.
    // 이 경우, useEffect의 의존성 배열에 pageNum만 포함되어 있어, pageNum이 바뀔 때만 fetchData가 호출되도록 설정되어 있습니다.
  }, [pageNum]);

  return (
    <div className='desktop:py-39 tablet:py-26 py-20'>
      <div className='tablet:flex tablet:flex-wrap tablet:w-[430px] desktop:w-[890px] desktop:flex-wrap desktop:flex '>
        {EducationData?.map((i, index) => (
          <div
            key={i.id}
            className='flex-col tablet:ml-20 w-[336px] my-12 desktop:w-[425px] tablet:w-371 desktop:my-10 border-2 border-mainLevel100 border-color-[#EAEAEA] rounded-lg dark:border-[#383838]'
          >
            <Link
              key={i.id}
              href={{
                pathname: `/educations/${i.id}`,
              }}
            >
              <div className='flex-wrap  w-full flex h-[163px] tablet:h-180 desktop:h-[210px] bg-mainLevel300 border-mainLevel300 hover:bg-mainLevel500 dark:bg-[#383838] dark:hover:bg-[#6B6B6B]'>
                <h2 className='text-[26px] mr-[140px] tablet:text-[29px] tablet:p-20 desktop:text-[34px] text-typoTertiary font-bold p-10 desktop:p-[15px] flex-wrap desktop:mr-[170px]'>
                  {i.title}
                </h2>
                <div className='absolute w-168 h-135 ml-[170px] tablet:w-186 tablet:h-150 tablet:ml-[195px] tablet:mt-[48.5px] mt-[44.3px] desktop:ml-[220px] desktop:mt-[58px] desktop:w-216 desktop:h-173'>
                  <ModifiedGlasses_goldtori />
                </div>
              </div>
            </Link>
            <div className='flex bg-[#CDE7DA] h-[71px] tablet:h-79 desktop:h-92 p-10 pt-[25px] gap-[25px] dark:bg-[#343434] '>
              <Link
                key={i.id}
                href={{
                  pathname: `/education/${i.id}`,
                }}
              >
                <div className='w-[240px] desktop:w-[340px] tablet:w-[290px] text-typoPrimary text-[12px] tablet:text-[14px] desktop:text-[16px] desktop:paragraph-medium dark:text-[#D6D6D6]'>
                  {truncateText(i.content, 59)}
                </div>
              </Link>
              <div
                className='h-29 w-29 tablet:h-32 tablet:w-32 desktop:h-37 desktop:w-37'
                onClick={(event) => {
                  event.stopPropagation();
                  onHeartClick(i.id, i.bookmarked);
                }}
              >
                {i.bookmarked ? <Clickheart2 /> : <Heartdefault />}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={setPageNum} />
    </div>
  );
};

export default Education;
