document.querySelector('.form')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;
    const values = {};

    const elements = document.querySelectorAll('.required');
    for (const element of elements) {
      let isValid = true;
      const input = element.querySelector('input[type=text]');
      const radios = element.querySelectorAll('input[type=radio]');

      if (input) {
        values[input.name] = input.value;
        if (!input.value) {
          isValid = false;
        }
      } else if (radios.length) {
        isValid = [...radios].some(radio => radio.checked);
        if (isValid) {
          const r = element.querySelector(['input[type=radio]:checked']);
          values[r.name] = r.value;
        }
      } else {
        continue; // eslint-disable-line
      }

      if (!isValid) {
        element.classList.add('warning');
        hasError = true;
      } else {
        element.classList.remove('warning');
      }
    }

    const keysToValues = Object.entries(values).map(value => `${value[0]}: ${value[1]}`);
    const output = keysToValues.reduce((ac, cur) => `${ac}\n${cur}`);

    if (!hasError) {
      alert(output);
    }
  });
