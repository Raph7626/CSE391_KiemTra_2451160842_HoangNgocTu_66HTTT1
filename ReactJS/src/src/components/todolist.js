import React from 'react'
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function TodoList() {
  return (
    <div>
      <button shouldFitContainer className='btn btn-primary' style={{ marginTop: '10px' }}>
        Item 1
      </button>
      <button shouldFitContainer className='btn btn-primary' style={{ marginTop: '10px' }}>
        Item 2
      </button>
    </div>
  )
}
