import React from 'react';

type TInputAmountProps = {
  amount?: string;
  onInputAmountHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputAmount: React.FC<TInputAmountProps & React.HTMLAttributes<HTMLButtonElement>> = ({
  amount,
  onInputAmountHandler,
  ...props
}) => {
  return (
    <div className='flex flex-col desktop:flex-row'>
      <input
        className='box-border w-308 px-12 py-9 items-center gap-10 rounded-10 mb-3 border border-border04 dark:border-dark-border04 bg-border01 dark:bg-dark-border01 text-typoSecondary label-small outline-none placeholder-typoSecondary tablet:w-394 tablet:px-15 tablet:py-11 tablet:rounded-12 tablet:label-medium tablet:mb-3 desktop:w-610 desktop:px-12 desktop:py-13 desktop:gap-10 desktop:rounded-10 desktop:mr-6 desktop:mb-0 desktop:label-medium'
        placeholder='설정 금액을 입력해주세요.'
        type='text'
        value={amount}
        onInput={onInputAmountHandler}
        spellCheck={false}
      />
      <button
        {...props}
        disabled={!amount}
        className='flex w-308 px-57 py-7 justify-center items-center bg-main disabled:bg-typoSecondary rounded-10 gap-10 text-secondary dark:text-dark-secondary heading-medium tablet:w-394 tablet:px-73 tablet:py-8 tablet:rounded-12 tablet:heading-large desktop:w-auto desktop:px-57 desktop:rounded-10 desktop:heading-large'
      >
        적용
      </button>
    </div>
  );
};

export default InputAmount;
