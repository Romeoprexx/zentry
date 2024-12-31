import React from 'react'

const Button = ({ title, id, containerClass, leftIcon, rightIcon}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit overflow-hidden rounded-full cursor-pointer bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
      {leftIcon}

      <span className='relative overflow-hideen font-general text-xs uppercase inline-flex'>
        <div>
            {title}
        </div>
      </span>
        {rightIcon}
    </button>
  )
}

export default Button