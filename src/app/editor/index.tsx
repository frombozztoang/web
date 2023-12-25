'use client';

// Editor Example

import React from 'react';
import { useState } from 'react';
import YooptaEditor from '@yoopta/editor';
import Paragraph from '@yoopta/paragraph';
import YooptaImage from '@yoopta/image';
import Callout from '@yoopta/callout';
import LinkTool from '@yoopta/link-tool';
import ActionMenu from '@yoopta/action-menu-list';
import Toolbar from '@yoopta/toolbar';
import { HeadingOne, HeadingTwo, HeadingThree } from '@yoopta/headings';
import Lists from '@yoopta/lists';
import { Bold, Italic, CodeMark, Underline, Strike } from '@yoopta/marks';

const plugins = [
  Paragraph,
  YooptaImage,
  Callout,
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  Lists.NumberedList,
  Lists.BulletedList,
];
const TOOLS = {
  Toolbar: <Toolbar />,
  ActionMenu: <ActionMenu />,
  LinkTool: <LinkTool />,
};
const MARKS = [Bold, Italic, CodeMark, Underline, Strike];

export default function EditorPage() {
  const [value, setValue] = useState([]);

  return (
    <div style={{ padding: '100px' }}>
      <div> RootPage</div>
      <YooptaEditor
        value={value}
        onChange={(val) => setValue(val)}
        plugins={plugins}
        placeholder='Type text..'
        tools={TOOLS}
        marks={MARKS}
      />
      <button onClick={() => console.log(value)}>클릭</button>
    </div>
  );
}
