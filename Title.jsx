import React from 'react'

const Title = ({title,description}) => {
  return (
    <div className='text-center mt-6 text-slate-700'>
      <h2 className='text-3xl sm:text-4xl font-medium'>{title}</h2>
      <p className='max-sm max-w-2xl mt-4 text-slate-500'>{description}</p>
    </div>
  )
}

export default Title
// TITLE.JSX is a simple component that takes in a title and description as props and renders them in a styled manner. The title is displayed as a large heading, while the description is shown as a smaller paragraph below it. The component is centered on the page and has some margin at the top for spacing.
