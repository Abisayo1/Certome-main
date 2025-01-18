import React from 'react'


const newSection3 = () => {
  return (
    <div className='mt-[10%] px-[5%] relative'>
      <img className='' src="newSection3.png" loading="lazy"
        srcset="responsive_img.png 480w responsive_img.png 768w"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw" alt="This is an image of how to set up an account in certome" />
      <img className='z-[9999] scale-100 absolute top-0 left-0 ' src="badge.png" alt="A badge" />
    </div>
  )
}

export default newSection3
