import React, { DOM } from 'react';

import _ from 'lodash';

//Презентационный компонент для отображения списка телефонов
//Stateless component
const PhonesList = ({ phones }) => (
  DOM.ul(
    null,
    _.map(
      //первый аргумент - список из свойства phones
      phones,
      //второй - функция преобр объект записи в тлф книге в элемент тега li
      (phone, key) => (
        DOM.li({ key }, `${phone.name} (${phone.phone})`)
      )
    )
  )
)

export default PhonesList;