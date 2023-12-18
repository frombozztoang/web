'use client';

import ActionMenuList from '@yoopta/action-menu-list';
import YooptaEditor from '@yoopta/editor';
import LinkTool from '@yoopta/link-tool';
import Paragraph from '@yoopta/paragraph';
import { useState } from 'react';

const plugins = [Paragraph];
const TOOLS = {
  ActionMenu: <ActionMenuList />,
  LinkTool: <LinkTool />,
};

export default function Home() {
  const [value, setValue] = useState([]);
  return (
    <div style={{ padding: '100px' }}>
      <YooptaEditor
        value={value}
        onChange={(val) => setValue(val)}
        plugins={plugins}
        tools={TOOLS}
        placeholder='Type text..'
      />
    </div>
  );
}
