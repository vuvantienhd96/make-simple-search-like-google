import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const options = [
  { value: 'hosta', label: 'hosta' },
  { value: 'hostb', label: 'hostb' },
  { value: 'vanilla', label: 'Vanilla' }
];

export default function Test() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [itemFill, setItemFill] = useState(null);

  console.log('selectedOption', selectedOption);
  console.log('itemFill', itemFill);
  useEffect(() => {
    if (selectedOption !== null) {
      let item = listItem.filter((el, index) => {
        return el['user']['username'] === selectedOption.value;
      });
      setItemFill(item);
    }
  }, [selectedOption]);
  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />

      <div>
        {
          <input
            value={itemFill && itemFill.length > 0 && itemFill[0].user.username}
          />
        }
      </div>
    </div>
  );
}

const listItem = [
  {
    userId: 5,
    superAdmin: true,
    joined: true,
    formInitialRequireAuth: false,
    formInitialShowOrderedQty: false,
    enableProductCategory: false,
    enableProductCustomized: false,
    permissions: [1, 3, 2],
    user: {
      id: 5,
      username: 'hosta',
      displayName: 'Host A',
      mobile: '30010001',
      countryCode: '+65',
      fullMobile: '+6530010001'
    }
  },
  {
    userId: 5,
    superAdmin: true,
    joined: true,
    formInitialRequireAuth: false,
    formInitialShowOrderedQty: false,
    enableProductCategory: false,
    enableProductCustomized: false,
    permissions: [1, 3, 2],
    user: {
      id: 5,
      username: 'hostb',
      displayName: 'Host A',
      mobile: '30010001',
      countryCode: '+65',
      fullMobile: '+6530010001'
    }
  }
];
