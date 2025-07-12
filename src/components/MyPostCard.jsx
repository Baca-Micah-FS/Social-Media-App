import MyIcon from "./MyIcons";
import { TiDelete } from "react-icons/ti";
import { LuSaveOff } from "react-icons/lu";
import { FaSave } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const MyPostCard = (props) => {
  return (
    //TODO figure out which one I like better ??
    //TODO fix styles on the inputs
    <div>
      {props.IsEditing ? (
        <form style={styles.myForm}>
          <div style={styles.formLineTwo}>
            <div style={styles.avatarAndInput}>
              <MyIcon IconImg={props.AvatarImage} ImageAlt="Image Icon" />
              <input
                onChange={(e) => props.OnHeaderChange(props.Id, e.target.value)}
                value={props.CardHeader}
                type="text"
              />
            </div>
            <button
              onClick={() => props.ToggleEdit(props.Id, false)}
              type="button"
              style={styles.button}
            >
              <FaSave style={styles.buttonIcon} />
            </button>
            <button
              onClick={() => props.DiscardEdit(props.Id)}
              type="button"
              style={styles.button}
            >
              <LuSaveOff style={styles.buttonIcon} />
            </button>
          </div>
          <input
            onChange={(e) => props.OnParagraphChange(props.Id, e.target.value)}
            value={props.PostDescription}
            type="text"
          />
        </form>
      ) : (
        <form style={styles.myForm}>
          <div style={styles.formLineTwo}>
            <div style={styles.avatarAndInput}>
              <MyIcon IconImg={props.AvatarImage} ImageAlt="Image Icon" />
              <h3 style={styles.postCardHeader}>{props.CardHeader}</h3>
            </div>
            <button
              onClick={() => props.ToggleEdit(props.Id, true)}
              type="button"
              style={styles.button}
            >
              <MdEdit style={styles.buttonIcon} />
            </button>
            <button
              onClick={() => props.RemoveItem(props.Id)}
              type="button"
              style={styles.button}
            >
              <TiDelete style={styles.buttonIcon} />
            </button>
          </div>
          <p style={styles.postDescription}> {props.PostDescription}</p>
          <img src={props.ImgUrl} alt={props.ImageAlt}></img>
        </form>
      )}
    </div>

    // <form style={styles.myForm}>
    //   <div style={styles.formLineTwo}>
    //     <div style={styles.avatarAndInput}>
    //       <MyIcon IconImg={props.AvatarImage} ImageAlt="Image Icon" />
    //       {props.IsEditing ? (
    //         <input
    //           onChange={(e) => props.OnHeaderChange(props.Id, e.target.value)}
    //           value={props.CardHeader}
    //           type="text"
    //         />
    //       ) : (
    //         <h3 style={styles.postCardHeader}>{props.CardHeader}</h3>
    //       )}
    //     </div>
    //     {props.IsEditing ? (
    //       <button
    //         onClick={() => props.ToggleEdit(props.Id, false)}
    //         type="button"
    //         style={styles.button}
    //       >
    //         <FaSave style={styles.buttonIcon} />
    //       </button>
    //     ) : (
    //       <button
    //         onClick={() => props.ToggleEdit(props.Id, true)}
    //         type="button"
    //         style={styles.button}
    //       >
    //         <MdEdit style={styles.buttonIcon} />
    //       </button>
    //     )}
    //     {props.IsEditing ? (
    //       <button
    //         onClick={() => props.DiscardEdit(props.Id)}
    //         type="button"
    //         style={styles.button}
    //       >
    //         <LuSaveOff style={styles.buttonIcon} />
    //       </button>
    //     ) : (
    //       <button
    //         onClick={() => props.RemoveItem(props.Id)}
    //         type="button"
    //         style={styles.button}
    //       >
    //         <TiDelete style={styles.buttonIcon} />
    //       </button>
    //     )}
    //   </div>
    //   {props.IsEditing ? (
    //     <input
    //       onChange={(e) => props.OnParagraphChange(props.Id, e.target.value)}
    //       value={props.PostDescription}
    //       type="text"
    //     />
    //   ) : (
    //     <p style={styles.postDescription}> {props.PostDescription}</p>
    //   )}
    //   <img src={props.ImgUrl} alt={props.ImageAlt}></img>
    // </form>
  );
};

export default MyPostCard;

const styles = {
  myForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "15px",
    margin: "15px",
    paddingBottom: "4rem",
    backgroundColor: "white",
    color: "rgba(163, 173, 194)",
    boxShadow: "5px 5px 5px",
  },
  postInput: {
    backgroundColor: "lightgrey",
    border: "none",
    paddingLeft: "10px",
    height: "35px",
    marginLeft: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "10px",
  },
  descriptionInput: {
    border: "none",
    fontSize: "1rem",
    width: "85%",
    marginLeft: "20px",
  },

  formLineTwo: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: ".5rem",
    marginTop: ".5rem",
  },
  avatarAndInput: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
  },
  buttonIcon: {
    width: "28px",
    height: "28px",
  },
  button: {
    backgroundColor: "white",
  },
  postCardHeader: {
    marginLeft: "15px",
    fontFamily: "Open Sans",
    color: "#0d1b2a",
  },
  postDescription: {
    color: "#0d1b2a",
    fontSize: "17px",
    marginLeft: "10px",
  },
  postHeaderEditable: {},
};
