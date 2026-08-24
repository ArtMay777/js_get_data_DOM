'use strict';

const populationElements = document.querySelectorAll('.population');

const populationTexts = [...populationElements].map(
  (element) => element.textContent,
);

const populations = populationTexts.map((text) => {
  return Number(text.replaceAll(',', ''));
});

const totalPopulation = populations.reduce(
  (sum, population) => sum + population,
  0,
);

const averagePopulation = totalPopulation / populations.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = totalPopulation.toLocaleString('en-US');
averageElement.textContent = averagePopulation.toLocaleString('en-US');
