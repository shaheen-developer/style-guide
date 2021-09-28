import { React, useState } from 'react';
import { Layout, Button,Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import SBheader from './SBheader';
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const VscodeSnippet = () => {
  const [state, setState] = useState('');
const    size= 'large';
  

  return (
    <>
      <Layout>
        <Content style={{ padding: '0 50px' }}></Content>

        <SBheader sbtitle="VSCode Snippets" />        <div className="site-layout-content">
     
       
          Code snippets are templates that make it easier to enter repeating code patterns, such as loops or conditional-statements.<br/>
In Visual Studio Code, snippets appear in IntelliSense (Ctrl+Space) mixed with other suggestions, as well as in a dedicated snippet picker (Insert Snippet in the Command Palette). There is also support for tab-completion: Enable it with "editor.tabCompletion": "on", type a snippet prefix (trigger text), and press Tab to insert a snippet.<br/><br/>
You can easily define your own snippets without any extension. To create, select User Snippets under File Preferences (Code  Preferences on macOS), and then select the New Global Snippets file option if they should appear for all languages.
<br/><br/>

Create the file with name of your choice with .code-snippets as extension and Download Snippets file with provided button above. Post download copy paste the snippet to newly created global snippet file.

          </div>
      </Layout>

    </>
  )
}

export default VscodeSnippet;