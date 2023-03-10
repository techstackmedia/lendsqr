interface buttonType {
  text: string;
  textColor: string;
  bgColor: string;
  buttonWidth: string;
  buttonBorderRadius: string;
  buttonBorder: string;
  fontSize: string;
  handleButtonClick: any;
}

const Button = ({
  textColor,
  text,
  bgColor,
  buttonWidth,
  buttonBorderRadius,
  buttonBorder,
  fontSize,
  handleButtonClick,
}: buttonType) => {
  const buttonStyle = {
    color: textColor,
    backgroundColor: bgColor,
    width: buttonWidth,
    borderRadius: buttonBorderRadius,
    border: buttonBorder,
    fontSize,
    cursor: "pointer",
  };
  return (
    <button onClick={handleButtonClick} type="button" style={buttonStyle}>
      {text.toUpperCase()}
    </button>
  );
};

Button.defaultProps = {
  buttonWidth: "100%",
  buttonBorderRadius: 8,
  textColor: "#fff",
  bgColor: "#39CDCC",
  buttonBorder: `1px solid #39CDCC`,
  fontSize: 14,
};

export default Button;
