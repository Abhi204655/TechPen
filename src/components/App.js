import Editor from "./Editor";
import { useEffect, useState } from "react";

const App = () => {
  const [html, setHtml] = useState("");
  const [js, setJs] = useState("");
  const [css, setCss] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    let doc = `
    <html>
    <body>
    ${html}
    </body>
    <style>${css}</style>
    <script>${js}</script>
    </html>`;
    setSrcDoc(doc);
  }, [html, css, js]);
  return (
    <div className="App">
      <div className="editors">
        <Editor title="HTML" value={html} onChange={setHtml} language="xml" />
        <Editor title="CSS" value={css} onChange={setCss} language="css" />
        <Editor title="JS" value={js} onChange={setJs} language="javascript" />
      </div>
      <div className="result">
        <iframe
          srcDoc={srcDoc}
          title="result"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          heigh="100%"
        />
      </div>
    </div>
  );
};

export default App;
