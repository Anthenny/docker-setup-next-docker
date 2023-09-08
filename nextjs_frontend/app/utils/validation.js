const validation = (values) => {
  let errors = {};

  //Name
  if (!values.name.trim()) {
    errors.name = 'Naam vereist';
  } else if (!/^[a-zA-Z\s]+$/i.test(values.name)) {
    errors.name = 'Naam mag allen letter bewaten';
  } else if (!/^.{4,30}$/i.test(values.name)) {
    errors.name = 'De invoer moet ten minste 3 en maximaal 30 tekens bevatten';
  }

  //Email
  if (!values.email) {
    errors.email = 'Email vereist';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'De invoer moet een geldig e-mailadres zijn.';
  }

  //Telefoon
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Telefoon number vereist';
  } else if (!/^\(?([+]31|0031|0)-?6(\s?|-)([0-9]\s{0,3}){8}$/i.test(values.phoneNumber)) {
    errors.phoneNumber = 'Telefoon number is ongeldig';
  }

  //Subject
  // if (!values.subject) {
  //   errors.subject = 'Onderwerp vereist';
  // } else if (!/^[a-zA-Z0-9\s]+$/i.test(values.subject)) {
  //   errors.subject = 'Onderwerp mag allen letters bewaten';
  // } else if (!/^.{4,30}$/i.test(values.subject)) {
  //   errors.subject = 'De invoer moet ten minste 3 en maximaal 30 tekens bevatten';
  // }

  //Message
  if (!values.message) {
    errors.message = 'Bericht vereist';
  } else if (!/^[a-zA-Z\s0-9.]+$/i.test(values.message)) {
    errors.message = 'Bericht mag allen letters en numbers bewaten';
  } else if (!/^.{5,}$/i.test(values.message)) {
    errors.message = 'De invoer moet ten minste 5 tekens bevatten';
  }

  return errors;
};

export default validation;
