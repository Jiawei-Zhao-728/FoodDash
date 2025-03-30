const homeStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh", // Ensures full screen height
    width: "100%",
    fontFamily: "'Roboto', Arial, sans-serif",
    background: "linear-gradient(to bottom, #f8fbff, #fef6e4)",
    padding: "5% 8%",
    boxSizing: "border-box", // Prevents extra height from padding
    overflow: "hidden", // Prevents scrolling
    position: "fixed", // Fixes background in place
  },
  inputBox: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "600px",
    padding: "0",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: "30px",
  },
  textField: {
    width: "100%",
    borderRadius: "30px",
    backgroundColor: "white",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    "& .MuiOutlinedInput-root": {
      borderRadius: "30px",
      padding: "12px 20px",
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ff9800",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#ff9800",
    },
  },
};

export default homeStyles;
