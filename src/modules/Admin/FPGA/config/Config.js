import React, { Fragment, useState } from 'react';
import Header from '../../../../components/header/header';

const initialItemsList = [
  { id: 1, label: 'Reset Width', value: '' },
  { id: 2, label: 'Global Reset Width', value: '' },
  { id: 3, label: 'Global Dds Puls Width', value: '' },
  { id: 4, label: 'Global Reset Width', value: '' },
  { id: 5, label: 'Global Reset Width', value: '' },
  { id: 6, label: 'Global Reset Width', value: '' },
  { id: 7, label: 'Global Reset Width', value: '' },
  { id: 8, label: 'Global Reset Width', value: '' },
  { id: 9, label: 'Global Reset Width', value: '' },
  { id: 10, label: 'Global Reset Width', value: '' },
  { id: 11, label: 'Global Reset Width', value: '' },
  { id: 12, label: 'Global Reset Width', value: '' },
  { id: 13, label: 'Global Reset Width', value: '' },
  { id: 14, label: 'Global Reset Width', value: '' },
  { id: 15, label: 'Global Reset Width', value: '' },
  { id: 16, label: 'Global Reset Width', value: '' },
  { id: 17, label: 'Global Reset Width', value: '' },
  { id: 18, label: 'Global Reset Width', value: '' },
  { id: 19, label: 'Global Reset Width', value: '' },
];

const MultiSelectAndInputComponent = () => {
  const [items, setItems] = useState(initialItemsList);
  const [selectedItemIds, setSelectedItemIds] = useState([]);

  const selectAll = () => setSelectedItemIds(items.map(item => item.id));

  const deselectAll = () => setSelectedItemIds([]);

  const toggleSelection = (itemId) => {
    setSelectedItemIds(selectedItemIds.includes(itemId)
      ? selectedItemIds.filter(id => id !== itemId)
      : [...selectedItemIds, itemId]
    );
  };

  const handleInputChange = (itemId, value) => {
    setItems(items.map(item => item.id === itemId ? { ...item, value } : item));
  };

  const handleSubmit = () => {
    // Prepare a payload of items that are selected with their current values
    const payload = items
      .filter(item => selectedItemIds.includes(item.id))
      .map(({ id, value }) => ({ id, value }));
    
    // TODO: send `payload` to an API or handle it as needed
    console.log(payload);
  };

  return (
    <Fragment>
        <Header />
        <div>
          <button onClick={selectAll}>Select All</button>
          <button onClick={deselectAll}>None</button>
          <button onClick={handleSubmit}>Submit</button>
    
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedItemIds.includes(item.id)}
                    onChange={() => toggleSelection(item.id)}
                  />
                  {item.label}
                </label>
                <input
                  type="text"
                  value={item.value}
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                />
              </li>
            ))}
          </ul>
        </div>
    </Fragment>
  );
};

export default MultiSelectAndInputComponent;