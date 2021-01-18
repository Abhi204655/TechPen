import Editor from "./Editor";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import Navbar from "./Navbar";
import { initialSrc } from "./Html";

const useStyles = makeStyles(() => ({
  App: {
    width: "100%",
    height: "calc(100vh - 4em)",
  },
  code: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  editors: {
    flex: 1,
    display: "flex",
    gap: "1em",
    background: "#444857",
    padding: "1em",
  },
  result: {
    width: "100%",
    height: "50%",
  },
  resizeBar: {
    width: "100%",
    height: "1em",
    background: "#1a1b1f",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "auto",
    gap: "2px",
    "& > p": {
      margin: "0",
      padding: "0",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [html, setHtml] = useState(localStorage.getItem("html") || "");
  const [js, setJs] = useState(localStorage.getItem("js") || "");
  const [css, setCss] = useState(localStorage.getItem("css") || "");
  const [srcDoc, setSrcDoc] = useState(initialSrc);
  const [horizontal, setHorizontal] = useState(true);
  const [resizeWidth, setResizeWidth] = useState("100%");
  const [resizeHeight, setResizeHeight] = useState("50vh");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     saveCode();
  //   }, 2000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    if (html !== "" || css !== "" || js !== "") {
      let doc = `
          <html>
          <body>
          ${html}
          </body>
          <style>${css}</style>
          <script>${js}</script>
          </html>`;
      setSrcDoc(doc);
    }
  }, [html, css, js]);

  useEffect(() => {
    if (horizontal) {
      setResizeWidth("100%");
      setResizeHeight("50vh");
    } else {
      setResizeWidth("50vw");
      setResizeHeight("100vh");
    }
  }, [horizontal]);

  // const saveCode = () => {
  //   console.log("saving code...", html, css, js);
  //   localStorage.setItem("html", html);
  //   localStorage.setItem("js", js);
  //   localStorage.setItem("css", css);
  // };

  return (
    <>
      <CssBaseline />
      <div className={classes.App}>
        <Navbar setHorizontal={setHorizontal} />
        <div
          className={classes.code}
          style={{
            flexDirection: `${horizontal ? "column" : "row"}`,
          }}
        >
          <Resizable
            defaultSize={{
              // width: `${horizontal ? "100vw" : "50vw"}`,
              // // height: "50%",
              // height: `${horizontal ? "50%" : "100vh"}`,
              width: `${resizeWidth}`,
              // height: "50%",
              height: `${resizeHeight}`,
            }}
            minHeight="10vh"
            maxHeight="80%"
            bounds="parent"
            enable={{
              bottom: horizontal,
              top: false,
              right: !horizontal,
              left: false,
            }}
          >
            <div
              className={classes.editors}
              style={{
                flexDirection: `${horizontal ? "row" : "column"}`,
                width: `${horizontal ? "100%" : "50%"}`,
                height: `${horizontal ? "100%" : "100%"}`,
              }}
            >
              {/* <ResizePanel
              direction={`${horizontal ? "e" : "s"}`}
              className={classes.resizebox}
            > */}
              <Editor
                title="HTML"
                value={html}
                onChange={setHtml}
                language="xml"
              />
              {/* </ResizePanel> */}
              <Editor
                title="CSS"
                value={css}
                onChange={setCss}
                language="css"
              />
              {/* <ResizePanel direction={`${horizontal ? "w" : "n"}`}> */}
              <Editor
                title="JS"
                value={js}
                onChange={setJs}
                language="javascript"
              />
              {/* </ResizePanel> */}
            </div>
            <div className={classes.resizeBar}>
              <p>--</p>
            </div>
          </Resizable>
          <div
            className={classes.result}
            style={{
              width: `${horizontal ? "100%" : "50vw"}`,
              height: `${horizontal ? "100%" : "100%"}`,
            }}
          >
            <iframe
              srcDoc={srcDoc}
              title="result"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              heigh="100%"
              style={{
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
