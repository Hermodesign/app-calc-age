let btnCheck = document.querySelector('.btn');

let inpDay = document.querySelector('#day');
let inpMonth = document.querySelector('#month');
let inpYear = document.querySelector('#year');

let resDay = document.querySelector('#daysSpan');
let resMonth = document.querySelector('#monthsSpan');
let resYear = document.querySelector('#ageSpan');

btnCheck.addEventListener('click', () => {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();

  // VALIDACIJA

  const todayDate = new Date();
  const date = new Date(`${inpYear.value}-${inpMonth.value}-${inpDay.value}`);
  const jeVeci = date.getTime() > todayDate.getTime();
  console.log(date);

  function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  const leapYear = isLeapYear(inpYear.value);

  if (
    !inpDay.value ||
    !inpMonth.value ||
    !inpYear.value ||
    inpDay.value > 31 ||
    inpMonth.value > 12 ||
    jeVeci ||
    date == 'Invalid Date' ||
    (inpDay.value == 29 && inpMonth.value == 2 && !leapYear) ||
    (inpDay.value >= 30 && inpMonth.value == 2) ||
    (inpDay.value >= 31 && inpMonth.value == 2) ||
    (inpDay.value >= 31 && inpMonth.value == 4) ||
    (inpDay.value >= 31 && inpMonth.value == 6) ||
    (inpDay.value >= 31 && inpMonth.value == 9) ||
    (inpDay.value >= 31 && inpMonth.value == 11)
  ) {
    if (
      (inpDay.value == 29 && inpMonth.value == 2 && !leapYear) ||
      (inpDay.value >= 30 && inpMonth.value == 2) ||
      (inpDay.value >= 31 && inpMonth.value == 2) ||
      (inpDay.value >= 31 && inpMonth.value == 4) ||
      (inpDay.value >= 31 && inpMonth.value == 6) ||
      (inpDay.value >= 31 && inpMonth.value == 9) ||
      (inpDay.value >= 31 && inpMonth.value == 11)
    ) {
      const dayInput = document.getElementById('day');
      const dayLabel = document.querySelector('.l1');
      const dayReq = document.querySelector('.reqD');
      if (dayInput) {
        dayInput.classList.add('redBorder');
      }
      if (dayLabel) {
        dayLabel.classList.add('redLabel');
      }
      if (dayLabel) {
        dayReq.classList.remove('hidden');
      }
    }

    if (!inpDay.value) {
      const dayInput = document.getElementById('day');
      const dayLabel = document.querySelector('.l1');
      const dayReq = document.querySelector('.requD');
      if (dayInput) {
        dayInput.classList.add('redBorder');
      }
      if (dayLabel) {
        dayLabel.classList.add('redLabel');
      }
      if (dayLabel) {
        dayReq.classList.remove('hidden');
      }
    }

    if (inpDay.value > 31) {
      const dayInput = document.getElementById('day');
      const dayLabel = document.querySelector('.l1');
      const dayReq = document.querySelector('.reqD');
      if (dayInput) {
        dayInput.classList.add('redBorder');
      }
      if (dayLabel) {
        dayLabel.classList.add('redLabel');
      }
      if (dayLabel) {
        dayReq.classList.remove('hidden');
      }
    }

    if (!inpMonth.value) {
      const monthInput = document.getElementById('month');
      const monthLabel = document.querySelector('.l2');
      const monthReq = document.querySelector('.requM');
      if (monthInput) {
        monthInput.classList.add('redBorder');
      }
      if (monthLabel) {
        monthLabel.classList.add('redLabel');
      }
      if (monthLabel) {
        monthReq.classList.remove('hidden');
      }
    }
    if (inpMonth.value > 12) {
      console.log('Unesi validan mesec');
      const monthInput = document.getElementById('month');
      const monthLabel = document.querySelector('.l2');
      const monthReq = document.querySelector('.reqM');
      if (monthInput) {
        monthInput.classList.add('redBorder');
      }
      if (monthLabel) {
        monthLabel.classList.add('redLabel');
      }
      if (monthLabel) {
        monthReq.classList.remove('hidden');
      }
    }
    if (!inpYear.value) {
      const yearInput = document.getElementById('year');
      const yearLabel = document.querySelector('.l3');
      const yearReq = document.querySelector('.requY');
      if (yearInput) {
        yearInput.classList.add('redBorder');
      }
      if (yearLabel) {
        yearLabel.classList.add('redLabel');
      }
      if (yearLabel) {
        yearReq.classList.remove('hidden');
      }
    }

    if (jeVeci || date == 'Invalid Date') {
      if (inpYear.value > year) {
        const yearInput = document.getElementById('year');
        const yearLabel = document.querySelector('.l3');
        const yearReq = document.querySelector('.reqY');

        if (yearInput) {
          yearInput.classList.add('redBorder');
        }

        if (yearLabel) {
          yearLabel.classList.add('redLabel');
        }

        if (yearLabel) {
          yearReq.classList.remove('hidden');
        }
      }
    }
    return;
  }

  const dayInput = document.getElementById('day');
  const dayLabel = document.querySelector('.l1');
  const dayReq = document.querySelector('.reqD');

  const monthInput = document.getElementById('month');
  const monthLabel = document.querySelector('.l2');
  const monthReq = document.querySelector('.reqM');

  const yearInput = document.getElementById('year');
  const yearLabel = document.querySelector('.l3');
  const yearReq = document.querySelector('.reqY');

  if (dayInput) {
    dayInput.classList.remove('redBorder');
  }
  if (dayLabel) {
    dayLabel.classList.remove('redLabel');
  }
  if (dayReq) {
    dayReq.classList.add('hidden');
  }

  if (monthInput) {
    monthInput.classList.remove('redBorder');
  }
  if (monthLabel) {
    monthLabel.classList.remove('redLabel');
  }
  if (monthReq) {
    monthReq.classList.add('hidden');
  }

  if (yearInput) {
    yearInput.classList.remove('redBorder');
  }
  if (yearLabel) {
    yearLabel.classList.remove('redLabel');
  }
  if (yearReq) {
    yearReq.classList.add('hidden');
  }

  let calcYear = year - parseInt(inpYear.value);
  let calcMonth = month - parseInt(inpMonth.value);
  let calcDay = 0;

  if (
    month < parseInt(inpMonth.value) ||
    (month === parseInt(inpMonth.value) && day < parseInt(inpDay.value))
  ) {
    calcYear--;
    calcMonth += 12;
  }

  if (day >= parseInt(inpDay.value)) {
    calcDay = day - parseInt(inpDay.value);
  } else {
    let daysInBirthMonth = new Date(
      parseInt(inpYear.value),
      parseInt(inpMonth.value),
      0
    ).getDate();
    calcDay = daysInBirthMonth - parseInt(inpDay.value) + day;
    calcMonth--;
  }
  resDay.innerHTML = `${calcDay}`;
  resMonth.innerHTML = `${calcMonth}`;
  resYear.innerHTML = `${calcYear}`;
});
