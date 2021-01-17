import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  navbar: {
    width: "100%",
    height: "4em",
    background: "#1a1b1f",
    padding: "1em",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    "& > div": {
      display: "flex",
      gap: "1em",
      "& > p": {
        cursor: "pointer",
      },
    },
  },
}));

const Navbar = ({ setHorizontal }) => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <h3>TechPen</h3>
      {/* <div>
        <p onClick={() => setHorizontal(true)}>horizontal</p>
        <p onClick={() => setHorizontal(false)}>vertical</p>
      </div> */}
    </div>
  );
};

export default Navbar;
