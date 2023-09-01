import React from 'react'

export default function Bills({bill}) {

    const littleBills = [];

    for( let i = 0; i < bill; i++){
        littleBills.push(<img src='../public/img/billete.png' className="w-10 h-8 p-1" alt='billete'key={i}/>);
    }

  return (
    <div className='w-28 flex flex-wrap items-center justify-center'>{littleBills}</div>
  )
}
