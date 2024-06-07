import { nanoid } from "nanoid";
import { Component } from "react";
import styles from "./Contacts.module.scss"

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      name: "",
    };
  }
  render() {
    const nameId = nanoid();
    return (
        <form className={styles.form}>
        <label htmlFor={nameId}>Name</label>
        <input
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
            />
            <button type="submit">Add contact</button>
      </form>
    );
  }
}
