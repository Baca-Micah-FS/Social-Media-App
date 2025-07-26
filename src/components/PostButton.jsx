// Post Button located on the top post card for creating a new post

const PostButton = (props) => {
  return (
    <button style={styles.btnStyles} type="submit">
      {props.btnText}
      {props.btnIcon}
    </button>
  );
};

export default PostButton;

const styles = {
  btnStyles: {
    backgroundColor: "#778da9",
    color: "white",
    fontWeight: "bold",
    padding: "10px 50px",
    marginRight: "19px",

    cursor: "pointer",
  },
};
