import React from 'react';

type TInputAmountProps = {
  amount?: string;
  onInputAmountHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size: 'Large' | 'Small';
};

const InputAmount: React.FC<TInputAmountProps & React.HTMLAttributes<HTMLButtonElement>> = ({
  amount,
  onInputAmountHandler,
  size,
  ...props
}) => {
  return (
    <>
      {size === 'Large' ? (
        <div className='flex'>
          <input
            className='box-border w-610 px-12 py-13 items-center gap-10 rounded-10 border border-border04 bg-border01 text-typoSecondary mr-6 label-medium outline-none placeholder-typoSecondary'
            placeholder='설정 금액을 입력해주세요.'
            type='text'
            value={amount}
            onInput={onInputAmountHandler}
            spellCheck={false}
          />
          <button
            {...props}
            className='flex px-57 py-10 justify-center items-center bg-typoSecondary rounded-10 gap-10 text-secondary heading-large'
          >
            적용
          </button>
        </div>
      ) : (
        <div className='flex flex-col'>
          <input
            className='box-border w-308 px-12 py-9 items-center gap-10 rounded-10 mb-3 border border-border04 bg-border01 text-typoSecondary label-small outline-none placeholder-typoSecondary tablet:w-710 tablet:px-27 tablet:py-20 tablet:rounded-23 tablet:border-2 tablet:label-xl tablet:mb-7'
            placeholder='설정 금액을 입력해주세요.'
            type='text'
            value={amount}
            onInput={onInputAmountHandler}
            spellCheck={false}
          />
          <button
            {...props}
            className='flex w-308 px-57 py-7 justify-center items-center bg-typoSecondary rounded-10 gap-10 text-secondary heading-medium tablet:w-710 tablet:px-131 tablet:py-16 tablet:rounded-23 tablet:heading-xxl'
          >
            적용
          </button>
        </div>
      )}
    </>
  );
};

export default InputAmount;
