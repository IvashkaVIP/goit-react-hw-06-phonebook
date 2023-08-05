// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/slice';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget.elements;

    console.log(form.name.value);
    console.log(form.number.value);

    dispatch(addContact(form.name.value, form.number.value));

    evt.currentTarget.reset();
  };

// const formSubmitHandler = ({ name, number }) => {
//   if (contacts.find(item => item.name === name)) {
//     alert(`${name} is already in contacts.`);
//     return;
//   }
//   setContacts(prev => [{ number, name, id: nanoid() }, ...prev]);
// };



  // const handleChange = evt => {
  //   const { name, value } = evt.target;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            // value={name}
            // onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            // value={number}
            // onChange={handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};


// export const ContactForm = ({ onSubmit }) => {
//   const [name, setName] = useLocalStorage('name', '');
//   const [number, setNumber] = useLocalStorage('number', '');

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     onSubmit({ name, number });
//     reset();
//   };

//   const handleChange = evt => {
//     const { name, value } = evt.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className={css.form}>
//         <label className={css.label}>
//           Name
//           <input
//             className={css.input}
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           ></input>
//         </label>
//         <label className={css.label}>
//           Number
//           <input
//             className={css.input}
//             type="tel"
//             name="number"
//             value={number}
//             onChange={handleChange}
//             pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           ></input>
//         </label>
//         <button type="submit">Add contact</button>
//       </form>
//     </div>
//   );
// };

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
