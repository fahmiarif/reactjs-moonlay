import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import jupiter from '../../assets/images/jupiter.jpg'
import CardPlanet from '../../components/CardPlanet'
import Pagination from '../../components/Pagination'
import { getPlanetById, getPlanets } from '../../services';

/**
 * SCHEMA VALIDATION
 */
const schema = yup.object({
    name: yup.string().required(),
    diameter: yup.number().positive().integer().required(),
}).required();

export default function Planet() {
    /**
     * INIT REACT HOOK FORM & YUP
     */
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    /**
     * USESTATE DATA
     */
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [isEdit, setisEdit] = useState(false)

    /**
     * HANDLE BUTTON ADD/SAVE
     */
    const onSubmit = () => {
        Swal.fire('Saved!', '', 'success')
        setValue('name', '')
        setValue('diameter', '')
        setisEdit(false)
    }
    /**
     * HANDLE BUTTON DELETE
     */
    const handleDelete = (name) => {
        Swal.fire({
            title: `Do you want to delete ${name} ?`,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `Don't delete`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Deleted!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not deleted', '', 'info')
            }
        })
    }
    /**
     * HANDLE BUTTON EDIT GET BY ID
     */
    const handleEdit = async (id) => {
        await getPlanetById({ id: id }).then((res) => {
            setisEdit(true)
            setValue('name', res.name)
            setValue('diameter', res.diameter)
            window.scrollTo(0, 0)
        }).catch((err) => {
            console.log(err);
            alert(err.code)
        })
    }
    /**
     * HANDLE PAGINATION NEXT
     */
    const handleNext = () => {
        setPage(page + 1);
    }
    /**
     * HANDLE PAGINATION PREVIOUS
     * if page 1 dont decrease
     */
    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }
    /**
     * GET DATA
     */
    const getData = async () => {
        await getPlanets({ page: page }).then((res) => {
            setData(res.results)
        }).catch((err) => {
            console.log(err);
            alert(err.code)
        })
    }

    useEffect(() => {
        getData()
    }, [page])

    return (
        <div>
            {/* {process.env.REACT_APP_URL_API} */}
            <h1 className='font-medium text-lg'>Planet </h1>
            <div className='my-1'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-1'>
                    <input className={`py-1 border rounded w-full placeholder:text-sm px-4 ${errors.name && 'border-red-600'}`} {...register("name")} name='name' placeholder='input planet name' type="text" />
                    <p className='text-red-500 text-xs'>{errors.name?.message}</p>
                    <input className={`py-1 border rounded w-full placeholder:text-sm px-4 ${errors.diameter && 'border-red-600'}`} {...register("diameter")} name='diameter' placeholder='input diameter size' type="text" />
                    <p className='text-red-500 text-xs'>{errors.diameter?.message}</p>
                    {isEdit != '' ? (
                        <button className='border w-full border-green-500 rounded px-3 py-1 text-sm text-gray-600 hover:bg-green-400 hover:text-white'>Update</button>
                    ) : (
                        <button className='border w-full border-green-500 rounded px-3 py-1 text-sm text-gray-600 hover:bg-green-400 hover:text-white'>Add New</button>
                    )}
                </form>
            </div>
            <div className='mt-4 border-t py-2 grid grid-cols-2 lg:grid-cols-3 gap-2'>
                {data?.map(({ name, diameter, terrain, population }, i) => (
                    <CardPlanet key={i} id={i} name={name} diameter={diameter} population={population} terrain={terrain} handleDelete={handleDelete} handleEdit={handleEdit} />
                ))}
            </div>
            <Pagination page={page} handleNext={handleNext} handlePrevious={handlePrevious} />
        </div>
    )
}
