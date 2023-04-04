import React, { useState } from 'react';
import BucketForm from './BucketForm';
const eagernessClassNames = {
  'Must do': 'high',
  'Want to do': 'medium',
  'Take it or leave it': 'low',
};
function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {
    props.editBucketItem(edit.id, value);
    setEdit({
      id: null,
      value: '',
      eagerness: '',
    });
  };

  

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    // Hint: use a ternary operator
    <div className={`bucket-row ${item.complete ? 'complete' : ''} ${eagernessClassNames[item.eagerness]}`}>

      <div key={item.id} onClick={() => props.completeBucketItem(item.edit)}>
          {item.text}
      </div>
      <div className="icons">
        <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness})}> ✏️</p>
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
