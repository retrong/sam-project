import React from 'react'
import { loader } from '../../assets'

const Loading = () => {
  return (
    <div className='flex justify-center align-middle items-center'>
        <img src={loader} alt="" className='w-[100px] h-[100px]'/>

    </div>
  )
}

export default Loading