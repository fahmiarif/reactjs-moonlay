import React from 'react'

export default function Card({id, name, img}) {
    return (
        <>
            <div className='flex flex-col justify-center items-center border rounded p-4 hover:shadow cursor-pointer'>
                <img width={100} src={img} alt="" />
                <h1>{name}</h1>
                <div className='flex gap-2 mt-2'>
                    <button className='border border-green-500 rounded px-3 py-1 text-xs text-gray-600 hover:bg-green-400 hover:text-white'>Edit</button>
                    <button className='border border-red-500 rounded px-3 py-1 text-xs text-gray-600 hover:bg-red-400 hover:text-white'>Delete</button>
                </div>
            </div>
        </>
    )
}
