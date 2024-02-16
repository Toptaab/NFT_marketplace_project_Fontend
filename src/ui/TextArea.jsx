import React from 'react'

function TextArea({onChange,value,name}) {
  return (
    <textarea
    name={name}
    value={value?.name}
    onChange={onChange}
    className="border-2 border-gray rounded-2xl p-2 w-full flex items-center gap-2 resize-none"
    cols="30"
    rows="10"
  ></textarea>

  )
}

export default TextArea