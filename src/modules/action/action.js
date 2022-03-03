import { error, Process, success } from '../Dom/selector';
import httpCommon from './httpCommon';
import renderProcess from '../Dom/render.process';

export const getGames = async () => {
  try {
    const fetch = await httpCommon.get('/scores');
    return fetch.data.result;
  } catch (err) {
    return [];
  }
};

export const addGames = async (data) => {
  try {
    renderProcess(Process, 'Saving...', [error, success]);
    await httpCommon.post('/scores', data);
    renderProcess(success, 'Saved successfully', [Process, error]);
    setTimeout(() => {
      renderProcess(success, '', [Process, error, success]);
    }, 1000);
  } catch (err) {
    renderProcess(error, err.message, [success, error]);
  }
};