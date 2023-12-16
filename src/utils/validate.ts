export const validate = (name: string, value: string) => {
  switch (name) {
    case 'first_name':
    case 'second_name':
      if (!value.match(/^[A-Za-zА-ЯЁа-яё][A-Za-zА-ЯЁа-яё-]*$/)) {
        alert(
          `${name
          } введён неправильно, латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)`,
        );
        return false;
      } return true;

    case 'login':
      if (!value.match(/^(?!-|\d)[A-Za-z0-9_-]{3,20}(?<!-)$/)) {
        alert(
          `${name
          } введён неправильно, от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)`,
        );
        return false;
      } return true;

    case 'password':
      if (!value.match(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/)) {
        alert(
          `${name
          } введён неправильно, от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра`,
        );
        return false;
      } return true;

    case 'email':
      if (!value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        alert(
          `${name
          } введён неправильно, латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы`,
        );
        return false;
      } return true;

    case 'phone':
      if (!value.match(/^\+?\d{10,15}$/)) {
        alert(
          `${name
          } введён неправильно, от 10 до 15 символов, состоит из цифр, может начинается с плюса`,
        );
        return false;
      } return true;

    case 'message':
      if (!value.length) {
        alert(`${name} введён неправильно, не должно быть пустым`);
      } else return true;
  }
};
