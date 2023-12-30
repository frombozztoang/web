import PropTypes from 'prop-types';

type TButtonProps = {
  title: string;
  backgroundColor: string;
};

const SubButton = ({ title, backgroundColor }: TButtonProps) => {
  // 동적으로 클래스 이름을 설정
  const buttonClassName = `flex justify-center bg-${backgroundColor}  w-20 h-20`;

  return <div className={buttonClassName}>{title}</div>;
};

export default SubButton;
