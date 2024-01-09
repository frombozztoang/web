import BankIconBtn from '@/components/atom/button/BankIconBtnBig';
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
    <>
      {size === 'Large' ? (
        <div className='relative w-855 h-546 rounded-10 bg-secondary flex flex-col items-center'>
          <h1 className='heading-large text-typoPrimary mt-23'>은행 선택</h1>
          <div className='w-712'>
            <div className='flex mt-42'>
              <SubBtn text='1금융권' mr='mr-15' isOn={isOn} onClick={() => setIsOn(!isOn)} />
              <SubBtn text='저축은행' isOn={!isOn} onClick={() => setIsOn(!isOn)} />
            </div>
            <hr className='mt-16 mb-15 border-border01' />
            {isOn ? (
              <>
                <SelectBtn
                  style={{
                    float: 'right',
                  }}
                  isOn={allBtn}
                  onClick={onAllClickBank}
                />
                <div className='mt-57 gap-13 grid grid-cols-7 max-h-200 overflow-y-auto scrollbar-hide'>
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
                    float: 'right',
                  }}
                  isOn={allBtn2}
                  onClick={onAllClickBank}
                />
                <div className='mt-57 gap-13 grid grid-cols-7 max-h-200 overflow-y-auto scrollbar-hide'>
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
            mr='mt-55'
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
          <Close className='absolute top-21 right-20 cursor-pointer w-19 h-19' onClick={() => closeModal()} />
        </div>
      ) : (
        <div className='relative w-full h-full bg-secondary flex flex-col items-center tablet:overflow-y-auto scrollbar-hide'>
          <h1 className='heading-large text-typoPrimary mt-39 tablet:mt-56 tablet:heading-xxxl'>은행 선택</h1>
          <div className='px-15 tablet:px-53'>
            <div className='flex mt-44 tablet:mt-100'>
              <SubBtn
                text='1금융권'
                mr='mr-10 tablet:mr-22 tablet:w-239 tablet:py-8 tablet:label-xxl tablet:rounded-15'
                isOn={isOn}
                onClick={() => setIsOn(!isOn)}
              />
              <SubBtn
                text='저축은행'
                mr='tablet:w-239 tablet:py-8 tablet:label-xxl tablet:rounded-15'
                isOn={!isOn}
                onClick={() => setIsOn(!isOn)}
              />
            </div>
            <hr className='mt-16 mb-21 border-border01 tablet:mt-35 tablet:mb-46' />
            {isOn ? (
              <>
                <SelectBtn
                  style={{
                    float: 'right',
                  }}
                  isOn={allBtn}
                  onClick={onAllClickBank}
                />
                <div className='mt-78 flex items-center justify-center w-full tablet:mt-172'>
                  <div className='grid gap-x-30 gap-y-15 grid-cols-3 w-342 overflow-y-auto scrollbar-hide tablet:w-792 tablet:gap-x-66 tablet:gap-y-33'>
                    {bankInfo.map((bank, index) => (
                      <BankIconBtn
                        key={index}
                        isOn={selectedBank.includes(bank)}
                        text={bank}
                        size={size}
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
                <div className='mt-78 flex items-center justify-center w-full tablet:mt-172'>
                  <div className='grid gap-x-30 gap-y-15 grid-cols-3 w-342 overflow-y-auto scrollbar-hide tablet:w-792 tablet:gap-x-66 tablet:gap-y-33'>
                    {bankInfo2.map((bank, index) => (
                      <BankIconBtn
                        key={index}
                        isOn={selectedBank2.includes(bank)}
                        text={bank}
                        size={size}
                        onClick={() => onClickBanks(bank)}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <MainBtn
            mr='mt-31 mb-39 tablet:mt-68 tablet:mb-56 tablet:px-197 tablet:py-19 tablet:gap-22 tablet:rounded-22 tablet:heading-xxxl'
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
            className='absolute top-39 right-15 w-19 h-19 cursor-pointer tablet:top-56 tablet:right-53 tablet:w-45 tablet:h-45'
            onClick={() => closeModal()}
          />
        </div>
      )}
    </>
  );
};

export default MoreBankModal;
