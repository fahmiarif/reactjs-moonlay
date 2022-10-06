import React from 'react'

export default function CardPeople({id, name, gender, height, handleDelete, handleEdit}) {
    return (
        <>
            <div className='flex flex-col justify-center items-center border rounded p-4 hover:shadow cursor-pointer'>
                <h1 className='font-semibold'>{name}</h1>
                <ul className='text-xs'>
                    <li>Gender : {gender}</li>
                    <li>Height : {height}cm</li>
                </ul>
                <div className='flex gap-2 mt-2'>
                    <button onClick={()=>handleEdit(id+1)} className='border border-green-500 rounded px-3 py-1 text-xs text-gray-600 hover:bg-green-400 hover:text-white'>Edit</button>
                    <button onClick={()=>handleDelete(name)} className='border border-red-500 rounded px-3 py-1 text-xs text-gray-600 hover:bg-red-400 hover:text-white'>Delete</button>
                </div>
            </div>
        </>
    )
}
