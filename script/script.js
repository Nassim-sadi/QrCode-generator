const genBtn = document.querySelector('#genBtn');
const output = document.querySelector('#output');
const spin = document.querySelector('#spin');
const downloadBtn = document.querySelector('#downloadBtn');
//function that generates Qr code on click

genBtn.addEventListener('click', (e) => {
  clearUI();
  //Get everything we need
  const input = document.querySelector('#input').value;
  const size = document.querySelector('#qrSize').value;
  const label = document.querySelector('#label');
  //function start
  if (input === '') {
    return (label.innerHTML = 'this field is required');
  } else {
    showElem(spin);
    setTimeout(() => {
      new QRCode(output, {
        text: input,
        width: size,
        height: size,
      });
      hideElem(spin);
      setTimeout(() => {
        // Get save url
        const saveUrl = output.querySelector('img').src;
        // Create save button
        createSaveBtn(saveUrl);
      }, 50);
    }, 1000);

    console.log('qr code should be generated by now');
  }
});
//function for downloading generated img
// Create save button to download QR code as image
const createSaveBtn = (saveUrl) => {
  const link = document.createElement('a');
  link.id = 'save-link';
  link.classList =
    'bg-teal-100 hover:bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500';
  link.href = saveUrl;
  link.download = 'qrcode';
  link.innerHTML = 'Save Image';
  document.getElementById('dwn').appendChild(link);
};
//helper functions
const clearUI = () => {
  output.innerHTML = '';
  const saveBtn = document.getElementById('save-link');
  if (saveBtn) {
    saveBtn.remove();
  }
};
showElem = (elem) => {
  elem.classList.remove('hidden');
};
hideElem = (elem) => {
  elem.classList.add('hidden');
};

//mobile menu button
const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
