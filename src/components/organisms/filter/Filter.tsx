import FilterBtn from '@/components/atom/filter/FilterBtn';
import FilterResult from '@/components/atom/filter/FilterResult';
import FilterSubBtn from '@/components/atom/filter/FilterSubBtn';
import React from 'react';
import { cls } from '@/utils/cls';
import InputAmount from '@/components/molecules/inputfield/InputAmount';

type TFilterProps = {
  size: 'Large' | 'Small';
  amount?: string;
  onInputAmountHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  activeFilterIndex: number | undefined;
  setActiveFilterIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  subIsOn: string[];
  setSubIsOn: React.Dispatch<React.SetStateAction<string[]>>;
  filterTerms: {
    filter: string;
    sub: string[];
  }[];
  onInputOn: boolean;
  PlusSubBtn: (data: string) => void;
};

const Filter: React.FC<TFilterProps & React.HTMLAttributes<HTMLDivElement>> = ({
  amount,
  onInputAmountHandler,
  activeFilterIndex,
  setActiveFilterIndex,
  subIsOn,
  setSubIsOn,
  filterTerms,
  PlusSubBtn,
  onInputOn,
  size,
  ...props
}) => {
  return size === 'Large' ? (
    <div
      {...props}
      className={cls(
        'w-855 bg-secondary border-2 border-border01 rounded-10',
        subIsOn.length === 0 ? 'py-20' : 'pt-20',
      )}
    >
      <div className={cls('pl-17', activeFilterIndex !== undefined || subIsOn.length === 0 ? 'pb-0' : 'pb-20')}>
        {filterTerms.map((data, index) => {
          return (
            <FilterBtn
              key={index}
              style={{ marginRight: '10px' }}
              text={data.filter}
              isOn={activeFilterIndex === index}
              size={size}
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
        <div className={cls('pl-17 ', subIsOn.length === 0 ? 'mb-0' : 'mb-12')}>
          {filterTerms[activeFilterIndex].sub.map((data, index) => {
            return (
              <FilterSubBtn
                key={index}
                style={{ marginRight: '10px', marginTop: '12px' }}
                text={data}
                isOn={subIsOn.includes(data)}
                size={size}
                onClick={() => PlusSubBtn(data)}
              />
            );
          })}
        </div>
      )}
      {activeFilterIndex === 0 && onInputOn && (
        <div className={cls('pl-17', subIsOn.length === 0 ? 'pt-12' : 'pb-8')}>
          <InputAmount size={size} amount={amount} onInputAmountHandler={onInputAmountHandler} />
        </div>
      )}
      {!(subIsOn.length === 0) && (
        <>
          <hr className='border-b-1 border-border01' />
          <div className='mt-8 pl-17'>
            {subIsOn.map((data, index) => {
              return (
                <FilterResult
                  key={index}
                  style={{ marginRight: '10px', marginBottom: '8px' }}
                  text={data}
                  size={size}
                  toggleFn={() => PlusSubBtn(data)}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  ) : (
    <div
      {...props}
      className={cls(
        'w-342 bg-secondary border-2 border-border01 rounded-20',
        subIsOn.length === 0 ? 'py-20' : 'pt-20',
      )}
    >
      <div className={cls('pl-17', activeFilterIndex !== undefined || subIsOn.length === 0 ? 'pb-0' : 'pb-20')}>
        {filterTerms.map((data, index) => {
          return (
            <FilterBtn
              key={index}
              style={{ marginRight: '10px' }}
              text={data.filter}
              isOn={activeFilterIndex === index}
              size={size}
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
        <div className={cls('pl-17 ', subIsOn.length === 0 ? 'mb-0' : 'mb-12')}>
          {filterTerms[activeFilterIndex].sub.map((data, index) => {
            return (
              <FilterSubBtn
                key={index}
                style={{ marginRight: '10px', marginTop: '12px' }}
                text={data}
                isOn={subIsOn.includes(data)}
                size={size}
                onClick={() => PlusSubBtn(data)}
              />
            );
          })}
        </div>
      )}
      {activeFilterIndex === 0 && onInputOn && (
        <div className={cls('pl-17', subIsOn.length === 0 ? 'pt-12' : 'pb-8')}>
          <InputAmount size={size} amount={amount} onInputAmountHandler={onInputAmountHandler} />
        </div>
      )}
      {!(subIsOn.length === 0) && (
        <>
          <hr className='border-b-1 border-border01' />
          <div className='mt-8 pl-17'>
            {subIsOn.map((data, index) => {
              return (
                <FilterResult
                  key={index}
                  style={{ marginRight: '10px', marginBottom: '8px' }}
                  text={data}
                  size={size}
                  toggleFn={() => PlusSubBtn(data)}
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
