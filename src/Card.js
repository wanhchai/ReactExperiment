import React from "react";

import styles from "./Card-style";
const Card = props => {
  return (
    <div>
      <img style={styles.avatar} src={props.avatar_url} />
      <div style={styles.root}>
        <div style={styles.name}>{props.login}</div>
        <div style={styles.company_name}>{props.organizations_url}</div>
      </div>
    </div>
  );
};

export default Card;
