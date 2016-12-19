import React from 'react';

import PhonesList from '../ui/PhonesList';

const phones = [
  {
    name: 'Vasya',
    phone: '+7 921 123 45 67'
  },
  {
    name: 'Petya',
    phone: '+7 921 123 89 00'
  },
  {
    name: 'Borya',
    phone: '+7 921 123 90 12'
  } 
]

const DOM = React.DOM

//Контейнерный компонент наследующийся от React.Component
class PhonesContainer extends React.Component {
  //начальное состояние задаем в конструкторе
  constructor(props) {
    super(props)
    //в начальном состоянии добавим поле со списком телефонов
    this.state = { phones }
  }
  //возвращаем элемент презентационного компонента
  render() {
    //получаем свойство phones из состояния
    const { phones } = this.state
    //создаем элемент PhoneList и передаем ему свойство phones
    //createElement('div', null, 'Hello') принимает 
    //1й параметр - компонент или строковое представл тега
    //2 - свойства
    //3 - элемент который станет дочерним
    return React.createElement(PhonesList, { phones })
  } 
}

export default PhonesContainer;