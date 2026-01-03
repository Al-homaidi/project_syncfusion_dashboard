import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header, GlassCard } from '../components';
import { EditorData } from '../data/dummy';

const Editor = () => (
  <GlassCard className="m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl">
    <Header category="App" title="Editor" />
    <RichTextEditorComponent>
      <EditorData />
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
    </RichTextEditorComponent>
  </GlassCard>
);
export default Editor;
