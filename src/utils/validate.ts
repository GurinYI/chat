export const validate = (inputContainer: ParentNode) => {
  const input: HTMLInputElement | null = inputContainer.querySelector("input");
  const errorElement = inputContainer.querySelector("#form-error");

  if (errorElement && input) {
    switch (input.name) {
      case "first_name":
      case "second_name":
      case "display_name":
        if (!input.value.match(/^[A-Za-zА-ЯЁа-яё][A-Za-zА-ЯЁа-яё-]*$/)) {
          errorElement.classList.add("active");
          return false;
        }
        errorElement.classList.remove("active");
        return true;
      case "login":
        if (!input.value.match(/^(?!-|\d)[A-Za-z0-9_-]{3,20}(?<!-)$/)) {
          errorElement.classList.add("active");
          return false;
        }
        errorElement.classList.remove("active");
        return true;

      case "password":
        if (!input.value.match(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/)) {
          errorElement.classList.add("active");
          return false;
        }
        errorElement.classList.remove("active");
        return true;

      case "email":
        if (
          !input.value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
        ) {
          errorElement.classList.add("active");
          return false;
        }
        errorElement.classList.remove("active");
        return true;

      case "phone":
        if (!input.value.match(/^\+?\d{10,15}$/)) {
          errorElement.classList.add("active");
          return false;
        }

        errorElement.classList.remove("active");
        return true;

      case "message":
        if (!input.value.length) {
          errorElement.classList.add("active");
          return false;
        }
        errorElement.classList.remove("active");
        return true;
      default:
        return true;
    }
  }
};
