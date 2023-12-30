import { InferProps, Requireable } from 'prop-types';
import { JSX } from 'react';
import SubButton from './index';

// 스토리북에서 사용할 컴포넌트의 타이틀 정의
export default {
  title: 'subButton',
};

type TArgProps = {
  title: string;
  backgroundColor: string;
};

// 스토리북 템플릿 정의
const Template = (args: TArgProps) => <SubButton {...args} />;

// 스토리 정의 및 매개변수 설정
export const subButtonDefault = (args: TArgProps) => <SubButton {...args} />;

subButtonDefault.args = {
  title: '서브 버튼',
  backgroundColor: 'gray-500',
};
