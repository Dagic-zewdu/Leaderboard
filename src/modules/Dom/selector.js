export const selectDom = (string) => document.querySelector(string);
export const selectMultipleDom = (string) => document.querySelectorAll(string);

export const gamesListContainer = selectDom('ul.score-list');
export const form = selectDom('form.add-score-form'); // add score form
export const refresh = selectDom('button.btn-refresh'); // refresh button
export const success = selectDom('p.success'); // success message selector
export const error = selectDom('p.error'); // success message selector
export const Process = selectDom('p.process'); // success message selector
