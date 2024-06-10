import React from "react";

import styles from "./ContactList.module.scss";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map((contact) => (
      <li key={contact.id} className={styles.item}>
        {contact.name}: {contact.number}
        <button className={styles.buttonItem} onClick={() => onDeleteContact(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
