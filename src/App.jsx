import { useState } from 'react'

import './App.css'

import { Editor } from '@monaco-editor/react'

// import './clangd.vsix';
import './vscode-clangd-0.1.23.vsix';
function App() {
 

  return (
    <>
      <div>
        <Editor
        height={'90vh'}
        language='cpp'

        />
      </div>
      
    </>
  )
}

export default App
