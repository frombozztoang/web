'use client';
// Education 컴포넌트
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Heartdefault from '../../../public/icons/grayheart2.svg';
import ModifiedGlasses_goldtori from '../../../public/icons/modifiedglasses_goldtori.svg';
import Clickheart2 from '@/public/icons/clickheart2.svg';
import { getEducationsData } from '@/api/education/educationApi';
import Pagination from '@/components/molecules/pagination/Pagination';
import { deleteEducationBookmarkApi, postEducationBookmarkApi } from '@/api/bookmarkApi';
import SlateCompiler from '@/libs/editor/slateCompiler';
import WithLoginModal from '@/components/templates/login/WithLoginModal';
import truncateText from '@/utils/truncateText';

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
  const router = useRouter();
  const slateCompiler = new SlateCompiler();
  const [educationData, setEducationData] = useState<TEducation[] | undefined>([]);
  const [showModal, setShowModal] = useState(false);

  //페이지
  const [pageNum, setPageNum] = useState(0); //현재 페이지
  const [pageTotalNum, setPageTotalNum] = useState(0); //총 페이지 수

  const fetchData = async () => {
    try {
      const data = await getEducationsData(`size=8&page=${pageNum}`);
      if (data) {
        setPageTotalNum(data.totalPages);
        setEducationData(data.content);
      }
    } catch (error) {
      console.error('Error fetching bankListFetchData:', error);
    }
  };

  const onHeartClick = async (id: number, bookmarked: boolean) => {
    try {
      let apiResult;
      if (bookmarked) {
        apiResult = await deleteEducationBookmarkApi(id, 'EDU_CONTENT');
      } else {
        apiResult = await postEducationBookmarkApi(id, 'EDU_CONTENT');
      }
      if (apiResult !== undefined) {
        setEducationData(educationData?.map((item) => (item.id === id ? { ...item, bookmarked: !bookmarked } : item)));
      } else {
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error fetching bankBookmark:', error);
    }
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  return (
    <div className='desktop:py-39 tablet:py-26 py-20'>
      {showModal && (
        <WithLoginModal
          closeFn={() => {
            setShowModal(false);
          }}
        />
      )}
      <div className='tablet:flex tablet:flex-wrap tablet:w-430 desktop:w-890 desktop:flex-wrap desktop:flex'>
        {educationData?.map((i) => (
          <div
            key={i.id}
            onClick={() => router.push(`/educations/${i.id}`)}
            className='flex-col tablet:ml-20 w-336 my-12 desktop:w-425 tablet:w-371 desktop:my-10 rounded-lg cursor-pointer'
          >
            <div className='flex-wrap rounded-t-lg w-full flex h-163 tablet:h-180 desktop:h-210 bg-mainLevel300 hover:bg-mainLevel500 dark:bg-[#383838] dark:hover:bg-[#6B6B6B]'>
              <h2 className='heading-large desktop:text-29 tablet:text-29 tablet:w-260 desktop:w-260 text-typoTertiary font-bold flex-wrap w-200 p-18 desktop:p-22'>
                {i.title}
              </h2>
              <div className='absolute w-168 h-135 ml-170 tablet:w-186 tablet:h-150 tablet:ml-195 tablet:mt-48 mt-44 desktop:ml-220 desktop:mt-58 desktop:w-216 desktop:h-173'>
                <ModifiedGlasses_goldtori />
              </div>
            </div>
            <div className='flex justify-between rounded-b-lg bg-[#CDE7DA] h-71 tablet:h-79 desktop:h-92 gap-25 dark:bg-[#343434] overflow-hidden'>
              <div className='text-typoPrimary pt-18 pl-18 desktop:pt-22 desktop:pl-22 text-12 tablet:text-14 desktop:text-16 desktop:paragraph-medium dark:text-[#D6D6D6]'>
                {truncateText(slateCompiler.toPlainText(JSON.parse(i.content)), 50)}
              </div>
              <button
                className='mr-13 tablet:mr-18'
                onClick={(event) => {
                  event.stopPropagation();
                  onHeartClick(i.id, i.bookmarked);
                }}
              >
                {i.bookmarked ? (
                  <Clickheart2 className='w-29 h-29 tablet:w-32 tablet:h-32 desktop:w-37 desktop:h-37' />
                ) : (
                  <Heartdefault className='w-29 h-29 tablet:w-32 tablet:h-32 desktop:w-37 desktop:h-37' />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={setPageNum} />
    </div>
  );
};

export default Education;
