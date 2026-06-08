import '../style/xlDisplay/tailwind.css'
import '../style/xlDisplay/style.css';
function createTags(
  tagName,
  className = undefined,
  value = undefined,
  id = undefined
) {
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
});