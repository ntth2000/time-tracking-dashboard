const data = {
  daily: {
    'work': {
      current: 5,
      previous: 7,
    },
    'play': {
      current: 1,
      previous: 2,
    },
    'study': {
      current: 0,
      previous: 1,
    },
    'exercise': {
      current: 4,
      previous: 2,
    },
    'social': {
      current: 2,
      previous: 4,
    },
    'self-care': {
      current: 3,
      previous: 1,
    },
  },
  weekly: {
    'work': {
      current: 15,
      previous: 27,
    },
    'play': {
      current: 12,
      previous: 32,
    },
    'study': {
      current: 10,
      previous: 31,
    },
    'exercise': {
      current: 14,
      previous: 32,
    },
    'social': {
      current: 42,
      previous: 54,
    },
    'self-care': {
      current: 33,
      previous: 11,
    },
  },
  monthly: {
    'work': {
      current: 115,
      previous: 127,
    },
    'play': {
      current: 211,
      previous: 122,
    },
    'study': {
      current: 120,
      previous: 211,
    },
    'exercise': {
      current: 124,
      previous: 1212,
    },
    'social': {
      current: 112,
      previous: 214,
    },
    'self-care': {
      current: 312,
      previous: 121,
    },
  },
};
const activityList = ['work','play','study','exercise','social','self-care']

const buttons = document.querySelectorAll("button");
const dailyButton = document.querySelector(".daily");
const weeklyButton = document.querySelector(".weekly");
const monthlyButton = document.querySelector(".monthly");

for (const activity of activityList){
  const {current, previous} = data.weekly[activity]
  const elementCurrent = document.querySelector(`.current.${activity}-data`)
  elementCurrent.innerText = `${current} hrs`
  const elementPrevious = document.querySelector(`.previous.${activity}-data`)
  elementPrevious.innerText = `Last week - ${previous} hrs` 
  }

const removeActive = () => {
  for (const button of buttons) {
    button.classList.remove("active");
  }
};

dailyButton.addEventListener('click',()=>{
  removeActive()
  dailyButton.classList.add('active')
  for (const activity of activityList){
    const {current, previous} = data.daily[activity]
    const elementCurrent = document.querySelector(`.current.${activity}-data`)
    elementCurrent.innerText = `${current} hrs`
    const elementPrevious = document.querySelector(`.previous.${activity}-data`)
    elementPrevious.innerText = `Yesterday - ${previous} hrs` 
    }
})

weeklyButton.addEventListener('click',()=>{
  removeActive()
  weeklyButton.classList.add('active')
  for (const activity of activityList){
    const {current, previous} = data.weekly[activity]
    const elementCurrent = document.querySelector(`.current.${activity}-data`)
    elementCurrent.innerText = `${current} hrs`
    const elementPrevious = document.querySelector(`.previous.${activity}-data`)
    elementPrevious.innerText = `Last week - ${previous} hrs` 
    }
})

monthlyButton.addEventListener('click',()=>{
  removeActive()
  monthlyButton.classList.add('active')
  for (const activity of activityList){
    const {current, previous} = data.monthly[activity]
    const elementCurrent = document.querySelector(`.current.${activity}-data`)
    elementCurrent.innerText = `${current} hrs`
    const elementPrevious = document.querySelector(`.previous.${activity}-data`)
    elementPrevious.innerText = `Last month - ${previous} hrs` 
    }
})
