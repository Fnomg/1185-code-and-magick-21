'use strict';

const ARR_NAME = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const ARR_FAMILY = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const ARR_COAT_COLAR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const ARR_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const MIN = 0;
const COUNT_WIZARDS = 4;
let wizards = [];

let setup = document.querySelector(`.setup`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);
setup.classList.remove(`hidden`);

let similarListElement = setup.querySelector(`.setup-similar-list`);

let getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let makeWizard = function () {
  let wizard = {
    name: ARR_NAME[getRandomNumber(MIN, ARR_NAME.length - 1)] + ` ` + ARR_FAMILY[getRandomNumber(MIN, ARR_FAMILY.length - 1)],
    coatColor: ARR_COAT_COLAR[getRandomNumber(MIN, ARR_COAT_COLAR.length - 1)],
    eyesColor: ARR_EYES_COLOR[getRandomNumber(MIN, ARR_EYES_COLOR.length - 1)]
  };
  return wizard;
};

let getWizards = function () {

  for (let i = 0; i < COUNT_WIZARDS; i++) {
    wizards.push(makeWizard());
  }

  let renderWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;

    return wizardElement;
  };

  let fragment = document.createDocumentFragment();
  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

getWizards();
