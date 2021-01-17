import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as CodeMirror } from "react-codemirror2";

const Editor = ({ title, language, value, onChange }) => {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className="editor">
      <div className="editor-header">{title}</div>
      <CodeMirror
        className="editor-wrapper"
        value={value}
        options={{
          lint: true,
          mode: language,
          htmlMode: language === "xml" ? true : false,
          theme: "material",
          lineNumbers: true,
          tabSize: 4,
        }}
        onBeforeChange={handleChange}
        onChange={(editor, data, value) => {}}
      />
    </div>
  );
};

export default Editor;
