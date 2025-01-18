import React, { useState } from 'react';

const Gallery = () => {

  const [open, setOpen] = useState(false);
  // Sample data for the gallery cards
  const posts = [
    {
      id: 1,
      imageUrl: 'imagea.png',
      title: 'The Impact of Technology on the Workplace: How Technology is Changing',
      thumbnailUrl: 'imgIcon.jpg',
      name: 'Abisayo FA',
      date: 'August 28, 2024'
    },

    {
      id: 1,
      imageUrl: 'imageb.png',
      title: 'The Impact of Technology on the Workplace: How Technology is Changing',
      thumbnailUrl: 'imgIcon.jpg',
      name: 'Abisayo FA',
      date: 'August 28, 2024'
    },

    {
      id: 1,
      imageUrl: 'imagec.png',
      title: 'The Impact of Technology on the Workplace: How Technology is Changing',
      thumbnailUrl: 'imgIcon.jpg',
      name: 'Abisayo FA',
      date: 'August 28, 2024'
    },

    {
      id: 1,
      imageUrl: 'imaged.png',
      title: 'The Impact of Technology on the Workplace: How Technology is Changing',
      thumbnailUrl: 'imgIcon.jpg',
      name: 'Abisayo FA',
      date: 'August 28, 2024'
    },

    {
      id: 1,
      imageUrl: 'imagee.png',
      title: 'The Impact of Technology on the Workplace: How Technology is Changing',
      thumbnailUrl: 'imgIcon.jpg',
      name: 'Abisayo FA',
      date: 'August 28, 2024'
    },

    {
      id: 1,
      imageUrl: 'imagef.png',
      title: 'The Impact of Technology on the Workplace: How Technology is Changing',
      thumbnailUrl: 'imgIcon.jpg',
      name: 'Abisayo FA',
      date: 'August 28, 2024'
    },
    {
      id: 1,
      imageUrl: 'imagea.png',
      title: 'The Impact of Technology on the Workplace: How Technology is Changing',
      thumbnailUrl: 'imgIcon.jpg',
      name: 'Abisayo FA',
      date: 'August 28, 2024'
    }, {
      id: 1,
      imageUrl: 'imagea.png',
      title: 'The Impact of Technology on the Workplace: How Technology is Changing',
      thumbnailUrl: 'imgIcon.jpg',
      name: 'Abisayo FA',
      date: 'August 28, 2024'
    }, {
      id: 1,
      imageUrl: 'imagea.png',
      title: 'The Impact of Technology on the Workplace: How Technology is Changing',
      thumbnailUrl: 'imgIcon.jpg',
      name: 'Abisayo FA',
      date: 'August 28, 2024'
    }, {
      id: 1,
      imageUrl: 'imagea.png',
      title: 'The Impact of Technology on the Workplace: How Technology is Changing',
      thumbnailUrl: 'imgIcon.jpg',
      name: 'Abisayo FA',
      date: 'August 28, 2024'
    }, {
      id: 1,
      imageUrl: 'imagea.png',
      title: 'The Impact of Technology on the Workplace: How Technology is Changing',
      thumbnailUrl: 'imgIcon.jpg',
      name: 'Abisayo FA',
      date: 'August 28, 2024'
    }, {
      id: 1,
      imageUrl: 'imagea.png',
      title: 'The Impact of Technology on the Workplace: How Technology is Changing',
      thumbnailUrl: 'imgIcon.jpg',
      name: 'Abisayo FA',
      date: 'August 28, 2024'
    },
    // Add more posts as needed
  ];

  return (
    <div className=" lg:px-[10%] p-5 mx-auto lg:mx-16 ">
      <h2 className="text-3xl text-left mb-5 ">Latest Post</h2>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
        {open ? (

          posts.map((post) => (
            <div key={post.id} className="shadow-lg p-4 mx-auto max-w-[350px] rounded-xl ">
              <img src={post.imageUrl} alt={post.title} className="w-full rounded-md mb-3" />
              <button className="text-sm text-primary px-2 rounded-md bg-[#d6d6ff] ">Technology</button>
              <h3 className="text-xl font-semibold  ">{post.title}</h3>
              <div className="flex items-center ">
                <img src={post.thumbnailUrl} alt={post.name} className="w-10 h-10 rounded-full mr-3 " />
                <div className="flex flex-1">
                  <div className="text-sm font-semibold text-opacity-40 text-black mr-4 ">{post.name}</div>
                  <div className="text-sm font-semibold text-opacity-40 text-black mr-4">{post.date}</div>
                </div>
              </div>
            </div>
          ))

        ) : (
          posts.slice(0, 6).map((post) => (
            <div key={post.id} className="shadow-lg mx-auto p-4 max-w-[350px] rounded-xl ">
              <img src={post.imageUrl} alt={post.title} className="w-full rounded-md mb-3" />
              <button className="text-sm text-primary px-2 rounded-md bg-[#d6d6ff] ">Technology</button>
              <h3 className="text-xl font-semibold  ">{post.title}</h3>
              <div className="flex items-center ">
                <img src={post.thumbnailUrl} alt={post.name} className="w-10 h-10 rounded-full mr-3 " />
                <div className="flex flex-1">
                  <div className="text-sm font-semibold text-opacity-40 text-black mr-4 ">{post.name}</div>
                  <div className="text-sm font-semibold text-opacity-40 text-black mr-4">{post.date}</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className=" my-10  text-center ">
        <button onClick={() => setOpen(!open)} className="shadow-lg px-3 py-2 border rounded-xl outline-none ">View {open ? 'Less' : "More"} Posts</button>
      </div>
    </div>


  );
};

export default Gallery;
