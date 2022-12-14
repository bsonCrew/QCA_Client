import styled from "@emotion/styled";
import config from "../../config.json";

const BeautifulBar = styled(`div`)(props => {
  return {
    width: props.width ? `${props.width}rem` : "100%",
    height: `${0.5 * props.height}rem`,
    backgroundImage: `linear-gradient(${props.reverse ? 143 : -143}deg, ${
      config.gradientcolor[0]
    }, ${config.gradientcolor[1]} 71.71%)`,
    borderRadius: "5px",
    borderBottomLeftRadius: `${props.flatBottom ? "0px" : "5px"}`,
    borderBottomRightRadius: `${props.flatBottom ? "0px" : "5px"}`,
  };
});

export default BeautifulBar;
