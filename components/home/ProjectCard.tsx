'use client';

import React from 'react'

export default function ProjectCard({ index, title, setModal, typeOfWork, siteUrl = '' }: {
    index: number, title: string, typeOfWork: string, siteUrl?: string,
    setModal: ({ active, index }: {
        active: any;
        index: any;
    }) => void
}) {

    return (
        <div onMouseEnter={() => { setModal({ active: true, index }) }} onMouseLeave={() => { setModal({ active: false, index }) }} className=" bg-black relative rounded-2xl project-card flex gap-4 flex-col sm:flex-row p-4 sm:px-20 sm:py-10">
            <h2 className=' text-3xl'>{title}</h2>
            <p className=' text-sm'>{typeOfWork}</p>
            <a target='_blank' href={siteUrl} className=' absolute w-full h-full left-0 top-0'></a>
        </div>
    )
}