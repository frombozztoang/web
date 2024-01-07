import React from 'react';

type TInputAmountProps = {
  amount?: string;
  onInputAmountHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  //size: 'Large' | 'Small';
};

const InputAmount: React.FC<TInputAmountProps & React.HTMLAttributes<HTMLButtonElement>> = ({
  amount,
  onInputAmountHandler,
  ...props
}) => {
  return (
    <div className='flex'>
      <input
        className='w-600 px-12 py-13 items-center gap-10 rounded-10 border border-border04 bg-border01 text-typoSecondary mr-6 label-medium outline-none placeholder-typoSecondary'
        placeholder='설정 금액을 입력해주세요.'
        type='text'
        value={amount}
        onInput={onInputAmountHandler}
        spellCheck={false}
      />
      <button
        {...props}
        className='flex px-50 py-10 justify-center items-center bg-typoSecondary rounded-10 gap-10 text-secondary heading-large'
      >
        적용
      </button>
    </div>
  );
};

export default InputAmount;
