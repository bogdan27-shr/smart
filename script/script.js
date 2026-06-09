import '../style/xlDisplay/tailwind.css'
import '../style/xlDisplay/style.css';
function createTags(
  tagName,
  className = undefined,
  value = undefined,
  id = undefined
){
  let tag = document.createElement(tagName);

  if (className) {
    tag.classList.add(className);
  } else {
    return tag;
  }

  if (value) {
    tag.textContent = value;
  } else {
    return tag;
  }

  if (id) {
    tag.id = id;
  } else {
    return tag;
  }
}
let modalDiv = createTags(`div`, `modal`);
let modalSpan = createTags(`span`);
modalDiv.append(modalSpan);

window.addEventListener(`DOMContentLoaded`, () => {
  const contacts = document.querySelector(`.contacts`);

  contacts.addEventListener(`mousemove`, ({ target }) => {
    if(window.innerWidth <= 615){
      return;
    }else if(target.classList.contains(`phone`) || target.id === `phoneIcon`) {
      let number = document.querySelector(`.phoneNumber`);
      number.classList.remove(`notActive`);
      number.classList.add(`activeNumber`);
    }
  });
  contacts.addEventListener(`mouseout`, ({ target }) => {
    if(target.classList.contains(`phone`) || target.id === `phoneIcon`) {
      let number = document.querySelector(`.phoneNumber`);
      setTimeout(() => {
        number.classList.remove(`activeNumber`);
        number.classList.add(`notActive`);
      }, 7000);
    }
  });

  let modeMenu = `hide`;
  contacts.addEventListener(`click`, ({ target }) => {
    let menu = document.querySelector(`.menu`);
    if(target.id === `topMenu` && modeMenu === `hide`) {
      menu.classList.remove(`hide`);
      menu.classList.add(`show`);
      modeMenu = `active`;
    }
  });
  let closeMenu = document.querySelector(`.closeMenu`);
  closeMenu.addEventListener(`click`, ({ target }) => {
    let menu = document.querySelector(`.menu`);
    if(target.id === `closeMenu` && modeMenu === `active`) {
      menu.classList.remove(`show`);
      menu.classList.add(`hide`);
      modeMenu = `hide`;
    }
  });

  const btnUser = document.querySelector(`#btnSend`);
  btnUser.addEventListener(`click`, (e) => {
    const validName = /[а-я a-z]{2,15}/i;
    const validEmail = /^[a-z]{2,15}@[a-z]{2,8}\.[a-z]{2,8}(\.[a-z]{2,8})?$/i;

    let userName = document.querySelector(`#userName`);
    let userEmail = document.querySelector(`#userEmail`);
    let userMesagge = document.querySelector(`#userMessage`);
    if(validName.test(userName.value) && validEmail.test(userEmail.value)){
      let form = document.querySelector(`.contForForm .form`);

      modalSpan.textContent = `The data has been sent`;
      form.prepend(modalDiv);
      setTimeout(() => {
        modalDiv.classList.add(`ok`);
        setTimeout(() => {
          modalDiv.classList.add(`delete`);
          modalDiv.remove();
          setTimeout(() => {
            modalDiv.classList.remove(`ok`);
            modalDiv.classList.remove(`delete`);
          }, 2100);
        }, 2000);
      }, 1);
    }else{
      let form = document.querySelector(`.contForForm .form`);

      modalSpan.textContent = `Contacts are incorrect`;
      form.prepend(modalDiv);
      setTimeout(() => {
        modalDiv.classList.add(`error`);
        setTimeout(() => {
          modalDiv.classList.add(`delete`);
          modalDiv.remove();
          setTimeout(() => {
            modalDiv.classList.remove(`error`);
            modalDiv.classList.remove(`delete`);
          }, 2100);
        }, 2000);
      }, 1);
    }
  });
});