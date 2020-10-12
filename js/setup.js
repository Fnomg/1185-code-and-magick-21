'use strict';

const ARR_NAME = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const ARR_FAMILY = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const ARR_COAT_COLAR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const ARR_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const MIN = 0;
const COUNT_WIZARDS = 4;
const setup = document.querySelector(`.setup`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const similarListElement = setup.querySelector(`.setup-similar-list`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = document.querySelector(`.setup-close`);
const setupOpenIcon = setupOpen.querySelector(`.setup-open-icon`);
const setupUserName = setup.querySelector(`.setup-user-name`)

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const makeWizard = function () {
  const wizard = {
    name: `${ARR_NAME[getRandomNumber(MIN, ARR_NAME.length - 1)]} ${ARR_FAMILY[getRandomNumber(MIN, ARR_FAMILY.length - 1)]}`,
    coatColor: ARR_COAT_COLAR[getRandomNumber(MIN, ARR_COAT_COLAR.length - 1)],
    eyesColor: ARR_EYES_COLOR[getRandomNumber(MIN, ARR_EYES_COLOR.length - 1)]
  };
  return wizard;
};


const getWizards = function () {
  const wizards = [];
  for (let i = 0; i < COUNT_WIZARDS; i++) {
    wizards.push(makeWizard());
  }
  return wizards;
};

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;

  return wizardElement;
};

const arrWizards = getWizards();
const fragment = document.createDocumentFragment();
for (let i = 0; i < arrWizards.length; i++) {
  fragment.appendChild(renderWizard(arrWizards[i]));
}
similarListElement.appendChild(fragment);

const onPopupEscPress = function (evt) {
  if (document.activeElement === setupUserName) {
    return evt
  } else if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress)
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Escape` || evt.key === `Enter` ) {
    closePopup();
  }
});
