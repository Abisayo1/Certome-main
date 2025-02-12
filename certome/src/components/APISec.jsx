import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

const APISec = () => {
  // Sample data for the STORMYLINEs, you can replace this with actual data
  const STORMYLINEs = [
    { id: 1, imgSrc: "Standard1.png", title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine' },
    { id: 2, imgSrc: 'Standard2.png', title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine' },
    { id: 3, imgSrc: 'Standard3.png', title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine' },
    { id: 4, imgSrc: 'Standard4.png', title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine' },
    { id: 5, imgSrc: 'Standard5.png', title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine' },
    { id: 6, imgSrc: 'Standard6.png', title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine' },
    { id: 7, imgSrc: 'Standard7.png', title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine' },
    { id: 8, imgSrc: 'Standard8.png', title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine' },
    { id: 9, imgSrc: 'Standard9.png', title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine' },
    { id: 10, imgSrc: 'Standard10.png', title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine' },
    { id: 11, imgSrc: 'Standard11.png', title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine' },
    { id: 12, imgSrc: 'Standard12.png', title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine' },
    { id: 13, imgSrc: 'Standard13.png', title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine' },
    { id: 14, imgSrc: 'Standard14.png', title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine' },
    { id: 15, imgSrc: 'Standard15.png', title: 'STORMYLINE', subtitle: 'Learn how to integrate Certome with StormyLine.' },
  ];

  return (
    <div className="mt-10 px-[5%] relative mb-40 flex flex-col overflow-hidden">
      <img src="./badge.png" className="absolute scale-10 -z-[9999]" alt="" />
      
      {/* Align the title to the left */}
      <div className="flex items-center my-5">
        <span className="max-sm:ml-4 text-xl font-bold">All Integrations</span>
        <span className="arrow ml-2">
          <BiChevronRight />
        </span>
      </div>

      {/* Center the grid content */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 justify-center">
        {STORMYLINEs.map((STORMYLINE) => (
          <div key={STORMYLINE.id} className="text-center">
            <img
              src={STORMYLINE.imgSrc}
              alt={STORMYLINE.title}
              className="api-item-image mx-auto"
            />
            <span className="text-xl block my-4">{STORMYLINE.title}</span>
            <span className="text-lg block font-MontserratBold">{STORMYLINE.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default APISec;
