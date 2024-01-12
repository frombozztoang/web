import BankIconBtn from '@/components/atom/button/BankIconBtnBig';
import MainBtn from '@/components/atom/button/MainBtn';
import SelectBtn from '@/components/atom/button/SelectBtn';
import SubBtn from '@/components/atom/button/SubBtn';
import { useState } from 'react';
import Close from '@/public/icons/close_b.svg';

type TMoreCmaModalProps = {
  bankInfo: string[];
  bankAllCma: boolean;
  setBankAllCma: React.Dispatch<React.SetStateAction<boolean>>;
  bankSelCma: string[];
  setBankSelCma: React.Dispatch<React.SetStateAction<string[]>>;
  closeModal: () => void;
};

const MoreCmaModal: React.FC<TMoreCmaModalProps> = ({
  bankInfo,
  bankAllCma,
  setBankAllCma,
  bankSelCma,
  setBankSelCma,
  closeModal,
}) => {
  const [selectedBank, setSelectedBank] = useState(bankSelCma);
  const [allBtn, setAllBtn] = useState(bankAllCma);

  const onAllClickBank = () => {
    if (!allBtn) {
      const allBanks = bankInfo.map((info) => info);
      setSelectedBank(allBanks);
    } else {
      setSelectedBank([]);
    }
    setAllBtn(!allBtn);
  };

  const onClickBanks = (bank: string) => {
    if (allBtn) {
      setAllBtn(!allBtn);
    }
    if (selectedBank?.includes(bank)) {
      setSelectedBank(selectedBank.filter((item) => item !== bank));
    } else {
      setSelectedBank([...selectedBank, bank]);
    }
  };

  return (
    <div className='relative w-full h-full bg-secondary dark:bg-dark-secondary flex flex-col items-center overflow-y-auto overflow-x-hidden scrollbar-hide desktop:w-855 desktop:h-546 desktop:rounded-10'>
      <h1 className='heading-large text-typoPrimary dark:text-dark-typoPrimary mt-39 tablet:mt-56 desktop:mt-23'>
        은행 선택
      </h1>
      <div className='w-358 desktop:w-712'>
        <div className='flex mt-44 tablet:mt-41 desktop:mt-42'>
          <SubBtn text='증권사' isOn={true} />
        </div>
        <hr className='mt-16 mb-21 border-border01 dark:border-dark-border01 desktop:mb-15' />
        <SelectBtn
          style={{
            float: 'right',
          }}
          isOn={allBtn}
          onClick={onAllClickBank}
        />
        <div className='mt-78 flex items-center justify-center w-full desktop:mt-57'>
          <div className='grid overflow-x-hidden gap-x-30 gap-y-15 grid-cols-3 overflow-y-auto scrollbar-hide desktop:grid-cols-7 desktop:gap-13 desktop:max-h-195 desktop:overflow-y-auto scrollbar-hide'>
            {bankInfo.map((bank, index) => (
              <BankIconBtn
                key={index}
                isOn={selectedBank.includes(bank)}
                text={bank}
                onClick={() => onClickBanks(bank)}
              />
            ))}
          </div>
        </div>
      </div>
      <MainBtn
        styles='mt-31 mb-39 tablet:mb-56 desktop:mt-57 desktop:mb-0'
        onClick={() => {
          setBankAllCma(allBtn);
          setBankSelCma(selectedBank);
          closeModal();
        }}
        text='적용'
        isOn={!(selectedBank.length === 0)}
      />
      <Close
        className='absolute stroke-typoPrimary dark:stroke-dark-typoPrimary top-39 right-15 w-19 h-19 cursor-pointer tablet:top-56 tablet:right-53 desktop:top-21 desktop:right-20'
        onClick={() => closeModal()}
      />
    </div>
  );
};

export default MoreCmaModal;
