import BankIconBtn from '@/components/atom/button/BankIconBtnBig';
import MainBtn from '@/components/atom/button/MainBtn';
import SelectBtn from '@/components/atom/button/SelectBtn';
import SubBtn from '@/components/atom/button/SubBtn';
import { useState } from 'react';
import Close from '@/public/icons/close_b.svg';

type TMoreBankModalProps = {
  bankInfo: string[];
  bankInfo2: string[];
  bankAllFin: boolean;
  bankAllSave: boolean;
  setBankAllFin: React.Dispatch<React.SetStateAction<boolean>>;
  setBankAllSave: React.Dispatch<React.SetStateAction<boolean>>;
  bankSelFin: string[];
  bankSelSave: string[];
  setBankSelFin: React.Dispatch<React.SetStateAction<string[]>>;
  setBankSelSave: React.Dispatch<React.SetStateAction<string[]>>;
  closeModal: () => void;
};

const MoreBankModal: React.FC<TMoreBankModalProps> = ({
  bankInfo,
  bankInfo2,
  bankAllFin,
  bankAllSave,
  setBankAllFin,
  setBankAllSave,
  bankSelFin,
  bankSelSave,
  setBankSelFin,
  setBankSelSave,
  closeModal,
}) => {
  const [selectedBank, setSelectedBank] = useState(bankSelFin);
  const [selectedBank2, setSelectedBank2] = useState(bankSelSave);
  const [allBtn, setAllBtn] = useState(bankAllFin);
  const [allBtn2, setAllBtn2] = useState(bankAllSave);
  const [isOn, setIsOn] = useState(true); //true가 1금융권, false가 저축은행 선택

  const onAllClickBank = () => {
    if (isOn) {
      if (!allBtn) {
        const allBanks = bankInfo.map((info) => info);
        setSelectedBank(allBanks);
      } else {
        setSelectedBank([]);
      }
      setAllBtn(!allBtn);
    } else {
      if (!allBtn2) {
        const allBanks = bankInfo2.map((info) => info);
        setSelectedBank2(allBanks);
      } else {
        setSelectedBank2([]);
      }
      setAllBtn2(!allBtn2);
    }
  };

  const onClickBanks = (bank: string) => {
    if (isOn) {
      if (allBtn) {
        setAllBtn(!allBtn);
      }
      if (selectedBank?.includes(bank)) {
        setSelectedBank(selectedBank.filter((item) => item !== bank));
      } else {
        setSelectedBank([...selectedBank, bank]);
      }
    } else {
      if (allBtn2) {
        setAllBtn2(!allBtn2);
      }
      if (selectedBank2?.includes(bank)) {
        setSelectedBank2(selectedBank2.filter((item) => item !== bank));
      } else {
        setSelectedBank2([...selectedBank2, bank]);
      }
    }
  };

  return (
    <div className='relative w-full h-full bg-secondary dark:bg-dark-secondary flex flex-col items-center overflow-y-auto overflow-x-hidden scrollbar-hide desktop:w-855 desktop:h-546 desktop:rounded-10'>
      <h1 className='heading-large text-typoPrimary dark:text-dark-typoPrimary mt-39 tablet:mt-56 desktop:mt-23'>
        은행 선택
      </h1>
      <div className='w-358 desktop:w-712'>
        <div className='flex mt-44 tablet:mt-41 desktop:mt-42'>
          <SubBtn text='1금융권' mr='mr-10 desktop:mr-15' isOn={isOn} onClick={() => setIsOn(!isOn)} />
          <SubBtn text='저축은행' isOn={!isOn} onClick={() => setIsOn(!isOn)} />
        </div>
        <hr className='mt-16 mb-21 border-border01 dark:border-dark-border01 desktop:mb-15' />
        {isOn ? (
          <>
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
          </>
        ) : (
          <>
            <SelectBtn
              style={{
                float: 'right',
              }}
              isOn={allBtn2}
              onClick={onAllClickBank}
            />
            <div className='mt-78 flex items-center justify-center w-full desktop:mt-57'>
              <div className='grid overflow-x-hidden gap-x-30 gap-y-15 grid-cols-3 overflow-y-auto scrollbar-hide desktop:grid-cols-7 desktop:gap-13 desktop:max-h-195 desktop:overflow-y-auto scrollbar-hide'>
                {bankInfo2.map((bank, index) => (
                  <BankIconBtn
                    key={index}
                    isOn={selectedBank2.includes(bank)}
                    text={bank}
                    onClick={() => onClickBanks(bank)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <MainBtn
        styles='mt-31 mb-39 tablet:mb-56 desktop:mt-57 desktop:mb-0'
        onClick={() => {
          setBankAllFin(allBtn);
          setBankAllSave(allBtn2);
          setBankSelFin(selectedBank);
          setBankSelSave(selectedBank2);
          closeModal();
        }}
        text='적용'
        isOn={!(selectedBank.length === 0 && selectedBank2.length === 0)}
      />
      <Close
        className='absolute stroke-typoPrimary dark:stroke-dark-typoPrimary top-39 right-15 w-19 h-19 cursor-pointer tablet:top-56 tablet:right-53 desktop:top-21 desktop:right-20'
        onClick={() => closeModal()}
      />
    </div>
  );
};

export default MoreBankModal;
