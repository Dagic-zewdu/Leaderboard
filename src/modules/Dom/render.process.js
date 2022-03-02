const renderProcess = (dom, message, remove) => {
  dom.style.display = 'block';
  dom.innerText = message;
  remove.forEach((item) => {
    item.innerText = '';
    item.style.display = 'none';
  });
};

export default renderProcess;