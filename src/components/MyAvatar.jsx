//Component for Avatar/Profile Pic used in header and Newsfeed.
//Profile Pic links to Settings page

import React from "react";

const MyAvatar = (props) => {
  return (
    <img src={props.AvatarIcon} alt={props.AvatarAlt} style={styles.myAvatar} />
  );
};
export default MyAvatar;

const styles = {
  myAvatar: {
    height: "75px",
    cursor: "pointer",
    borderRadius: "50%",
  },
};
