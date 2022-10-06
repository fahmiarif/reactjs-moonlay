import React from 'react'

export default function Pagination({page, handleNext, handlePrevious}) {
    return (
        <div className='flex justify-center items-center gap-2'>
            <button onClick={()=>handlePrevious()} className={`px-3 py-1 text-sm border rounded ${page == 1?'cursor-not-allowed text-gray-300':'hover:bg-green-400 hover:text-white'} `}>Previous</button>
            <button className='px-3 py-1 text-sm border rounded'>{page}</button>
            <button onClick={()=>handleNext()} className='px-3 py-1 text-sm border rounded hover:bg-green-400 hover:text-white'>Next</button>
        </div>
    )
}
