const state = {
  bank: [],
  odds: [],
  evens: [],
};

const h1OddsAndEventsTitle = document.createElement("h1");
h1OddsAndEventsTitle.innerText = "Odds and Events";
document.getElementById("app").appendChild(h1OddsAndEventsTitle);

const inputSection = document.createElement("section");
inputSection.setAttribute(`id`, `input`);
document.getElementById(`app`).appendChild(inputSection);

const instructionsP = document.createElement(`p`);
instructionsP.innerText = `Add a number to the bank:`;
document.getElementById(`input`).appendChild(instructionsP);

const userInputForm = document.createElement(`form`);
document.getElementById(`input`).appendChild(userInputForm);

const inputBox = document.createElement(`input`);
inputBox.setAttribute(`placeholder`, `Use only numbers`);
userInputForm.appendChild(inputBox);

const addNumberBtn = document.createElement(`button`);
addNumberBtn.setAttribute(`id`, `add-number`);
addNumberBtn.innerText = `Add number`;
userInputForm.appendChild(addNumberBtn);

const sortOneBtn = document.createElement(`button`);
sortOneBtn.setAttribute(`id`, `sort-one`);
sortOneBtn.innerText = `Sort 1`;
userInputForm.appendChild(sortOneBtn);

const sortAllBtn = document.createElement(`button`);
sortAllBtn.setAttribute(`id`, `sort-all`);
sortAllBtn.innerText = `Sort All`;
userInputForm.appendChild(sortAllBtn);

const h2BankTitle = document.createElement(`h2`);
h2BankTitle.innerText = `Bank`;
h2BankTitle.setAttribute(`id`, `bank`);
document.getElementById(`app`).appendChild(h2BankTitle);

const bankStorageContainer = document.createElement(`section`);
bankStorageContainer.setAttribute(`id`, `bank-storage`);
document.getElementById(`app`).appendChild(bankStorageContainer);

const renderBankNumbers = () => {
  const bankStorageNumbers = document.querySelector(`#bank-storage`);
  bankStorageNumbers.innerText = state.bank.join(`  `);
  inputBox.value = ``;
};

addNumberBtn.addEventListener(`click`, (event) => {
  event.preventDefault();
  const addedNumber = document.querySelector(`input`);
  const numberValue = Number(addedNumber.value);
  if (!isNaN(numberValue)) {
    state.bank.push(numberValue);
    renderBankNumbers();
    addedNumber.value = ``;
  }
});

sortOneBtn.addEventListener(`click`, (event) => {
  event.preventDefault();
  const numberToSort = state.bank.shift();
  if (numberToSort % 2 === 0) {
    state.evens.push(numberToSort);
  } else {
    state.odds.push(numberToSort);
  }
  renderBankNumbers();
  renderEvenNumber();
  renderOddNumber();
});

sortAllBtn.addEventListener(`click`, (event) => {
  event.preventDefault();
  while (state.bank.length > 0) {
    const numberToSort = state.bank.shift();
    if (numberToSort % 2 === 0) {
      state.evens.push(numberToSort);
    } else {
      state.odds.push(numberToSort);
    }
  }
  renderBankNumbers();
  renderEvenNumber();
  renderOddNumber();
});

const h2OddsTitle = document.createElement(`h2`);
h2OddsTitle.innerText = `Odds`;
h2OddsTitle.setAttribute(`id`, `odds`);
document.getElementById(`app`).appendChild(h2OddsTitle);

const oddsStorageContainer = document.createElement(`section`);
oddsStorageContainer.setAttribute(`id`, `odds-storage`);
document.getElementById(`app`).appendChild(oddsStorageContainer);

const renderOddNumber = () => {
  const oddStorageNumbers = document.querySelector(`#odds-storage`);
  oddStorageNumbers.innerText = state.odds.join(` `);
};

const h2EvensTitle = document.createElement(`h2`);
h2EvensTitle.innerText = `Evens`;
h2EvensTitle.setAttribute(`id`, `Evens`);
document.getElementById(`app`).appendChild(h2EvensTitle);

const evensStorageContainer = document.createElement(`section`);
evensStorageContainer.setAttribute(`id`, `evens-storage`);
document.getElementById(`app`).appendChild(evensStorageContainer);

const renderEvenNumber = () => {
  const evenStorageNumbers = document.querySelector(`#evens-storage`);
  evenStorageNumbers.innerText = state.evens.join(` `);
};
