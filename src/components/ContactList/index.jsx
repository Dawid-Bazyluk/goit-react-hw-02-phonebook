import React from "react";

import styles from "./ContactList.module.scss";

const ContactList = ({ contacts }) => (
  <ul className={styles.list}>
    {contacts.map((contact) => (
      <li key={contact.id} contact={contact} className={styles.item}>
        {contact.name}: {contact.number}
      </li>
    ))}
  </ul>
);

export default ContactList;
