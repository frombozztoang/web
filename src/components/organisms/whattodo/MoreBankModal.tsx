import BankIconBtn from '@/components/atom/button/BankIconBtn';
import MainBtn from '@/components/atom/button/MainBtn';
import SelectBtn from '@/components/atom/button/SelectBtn';
import SubBtn from '@/components/atom/button/SubBtn';
import { useState } from 'react';
import Close from '@/public/icons/close_b.svg';

type TMoreBankModalProps = {
  size: 'Large' | 'Small';
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
  size,
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
    <div className='relative w-855 h-546 rounded-10 bg-secondary flex flex-col items-center'>
      <h1 className='heading-large text-typoPrimary mt-23'>은행 선택</h1>
      <div className='w-712'>
        <div className='flex mt-42'>
          <SubBtn style={{ marginRight: '10px' }} text='1금융권' isOn={isOn} onClick={() => setIsOn(!isOn)} />
          <SubBtn text='저축은행' isOn={!isOn} onClick={() => setIsOn(!isOn)} />
        </div>
        <hr className='mt-16 border-border01' />
        {isOn ? (
          <>
            <SelectBtn
              style={{
                marginTop: '15px',
                float: 'right',
              }}
              isOn={allBtn}
              onClick={onAllClickBank}
            />
            <div className='mt-57 gap-13 grid grid-cols-7 h-200 overflow-y-auto scrollbar-hide'>
              {bankInfo.map((bank, index) => (
                <BankIconBtn
                  key={index}
                  style={{ marginRight: 10 }}
                  isOn={selectedBank.includes(bank)}
                  text={bank}
                  size={size}
                  onClick={() => onClickBanks(bank)}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <SelectBtn
              style={{
                marginTop: '15px',
                float: 'right',
              }}
              isOn={allBtn2}
              onClick={onAllClickBank}
            />
            <div className='mt-57 gap-13 grid grid-cols-7 h-200 overflow-y-auto scrollbar-hide'>
              {bankInfo2.map((bank, index) => (
                <BankIconBtn
                  key={index}
                  style={{ marginRight: 10 }}
                  isOn={selectedBank2.includes(bank)}
                  text={bank}
                  size={size}
                  onClick={() => onClickBanks(bank)}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <MainBtn
        style={{ marginTop: '55px' }}
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
      <Close className='absolute top-21 right-20 cursor-pointer' onClick={() => closeModal()} />
    </div>
  );
};

export default MoreBankModal;
