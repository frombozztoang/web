import FilterBtn from '@/components/atom/filter/FilterBtn';
import FilterResult from '@/components/atom/filter/FilterResult';
import FilterSubBtn from '@/components/atom/filter/FilterSubBtn';
import React from 'react';
import { cls } from '@/utils/cls';
import InputAmount from '@/components/molecules/inputfield/InputAmount';

type TFilterProps = {
  amount?: string;
  onInputAmountHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusAmountHandler?: () => void;
  onButtonClickHandler?: () => void;
  activeFilterIndex: number | undefined;
  setActiveFilterIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  subIsOn: {
    text: string;
    value: string;
  }[];
  filterTerms: {
    filter: string;
    sub: {
      text: string;
      value: string;
    }[];
  }[];
  onInputOn: boolean;
  plusSubBtn: (text: string, value: string) => void;
};

const Filter: React.FC<TFilterProps & React.HTMLAttributes<HTMLDivElement>> = ({
  amount,
  onInputAmountHandler,
  onFocusAmountHandler,
  onButtonClickHandler,
  activeFilterIndex,
  setActiveFilterIndex,
  subIsOn,
  filterTerms,
  plusSubBtn,
  onInputOn,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cls(
        'w-342 bg-secondary dark:bg-dark-secondary border-2 border-border01 dark:border-dark-border01 rounded-20 mt-10 tablet:w-438 tablet:rounded-25 tablet:mt-12 desktop:w-855 desktop:rounded-10 desktop:mt-10',
        subIsOn.length === 0 ? 'py-20 tablet:py-25 desktop:py-20' : 'pt-20 tablet:pt-25 desktop:pt-20',
      )}
    >
      <div
        className={cls(
          'pl-17 tablet:pl-21 desktop:pl-17',
          activeFilterIndex !== undefined || subIsOn.length === 0 ? 'pb-0' : 'pb-20 tablet:pb-25 desktop:pb-20',
        )}
      >
        {filterTerms.map((data, index) => {
          return (
            <FilterBtn
              key={index}
              styles='mr-10 tablet:mr-12 desktop:mr-10'
              text={data.filter}
              isOn={activeFilterIndex === index}
              onClick={() => {
                if (activeFilterIndex === index) {
                  setActiveFilterIndex(undefined);
                } else {
                  setActiveFilterIndex(index);
                }
              }}
            />
          );
        })}
      </div>
      {activeFilterIndex !== undefined && (
        <div
          className={cls(
            'pl-17 tablet:pl-21 desktop:pl-17',
            subIsOn.length === 0 ? 'mb-0' : 'mb-12 tablet:mb-15 desktop:mb-12',
          )}
        >
          {filterTerms[activeFilterIndex].sub.map((data, index) => {
            return (
              <FilterSubBtn
                key={index}
                styles='mr-10 mt-12 tablet:mt-15 desktop:mt-12'
                text={data.text}
                isOn={subIsOn.some((sub) => sub.text === data.text && sub.value === data.value)}
                onClick={() => plusSubBtn(data.text, data.value)}
              />
            );
          })}
        </div>
      )}
      {activeFilterIndex === 0 && onInputOn && (
        <div
          className={cls(
            'pl-17 tablet:pl-21 desktop:pl-17',
            subIsOn.length === 0 ? 'pt-12 tablet:pt-15 desktop:pt-12' : 'pb-8 tablet:pb-15 desktop:pb-8',
          )}
        >
          <InputAmount
            amount={amount}
            onInputAmountHandler={onInputAmountHandler}
            onFocusAmountHandler={onFocusAmountHandler}
            onClick={onButtonClickHandler}
          />
        </div>
      )}
      {!(subIsOn.length === 0) && (
        <>
          <hr className='border-b-1 border-border01 dark:border-dark-border01' />
          <div className='mt-8 pl-17 tablet:pl-21 tablet:mt-10 desktop:mt-8 desktop:pl-17'>
            {subIsOn.map((data, index) => {
              return (
                <FilterResult
                  key={index}
                  styles='mr-10 mb-8 tablet:mb-10 desktop:mb-8'
                  text={data.text}
                  toggleFn={() => plusSubBtn(data.text, data.value)}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Filter;
