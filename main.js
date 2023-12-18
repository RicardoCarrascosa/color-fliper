import './style.css'

const COLOR_PALLETE = {
  "#233D4D" : "Charcoal",
  "#FE7F2D" : "Pumpkin",
  "#FCCA46" : "Sunglow",
  "#A1C181" : "Olivine",
  "#619B8A" : "Polished Pine",
}

const addOptionsToColorPicker = () =>{

const colorPickerSelect = document.querySelector('#color-picker')
Object.keys(COLOR_PALLETE).forEach((color) => {
const option = document.createElement('option')
option.value = color
option.innerText = COLOR_PALLETE[color]
colorPickerSelect.append(option)
});
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker')
  const colorName = document.querySelector('#color-Name')
  colorPickerSelect.addEventListener('change', (ev) => {
    const newColor = ev.target.value
    document.body.style.backgroundColor = newColor
    const colorNameText = `${COLOR_PALLETE[newColor]} | ${newColor}`
    colorName.innerHTML =  COLOR_PALLETE[newColor] ? `${COLOR_PALLETE[newColor]} | ${newColor}` : '-'
  })
}

addOptionsToColorPicker()
addEventListenerToColorPicker()
