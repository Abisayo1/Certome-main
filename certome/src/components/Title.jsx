import React from 'react'

const Title = ({subTitle, title}) => {
    return (
        <div className='text-center mx-3 '>
            <h2 className="text-4xl font-MontserratBold " >{title}</h2>
            <div className='max-w-[500px] mx-auto text-sm ' >{subTitle}</div>
        </div>
    )
}

export default Title
