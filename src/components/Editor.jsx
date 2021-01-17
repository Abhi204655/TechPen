import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import { Controlled as CodeMirror } from "react-codemirror2";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  editor: {
    minWidth: "300px",
    flex: 1,
    // maxWidth: "60vw",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  editorHeader: {
    width: "100%",
    height: "50px",
    background: "#1a1b1f",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    color: "white",
    display: "flex",
    alignItems: "center",
    fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
    justifyContent: "center",
    fontWeight: "bold",
  },
  editorWrapper: {
    flex: 1,
    overflowY: "hidden",
  },
}));

const Editor = ({ title, language, value, onChange }) => {
  const classes = useStyles();
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className={classes.editor}>
      <div className={classes.editorHeader}>{title}</div>
      <CodeMirror
        className={classes.editorWrapper}
        value={value}
        options={{
          lint: true,
          mode: language,
          htmlMode: language === "xml" ? true : false,
          theme: "material",
          lineNumbers: true,
          tabSize: 4,
          matchBrackets: true,
          indentUnit: 4,
          indentWithTabs: true,
          autoCloseTags: true,
          autoCloseBrackets: true,
          matchTags: false,
          foldGutter: true,
        }}
        onBeforeChange={handleChange}
      />
    </div>
  );
};

export default Editor;
