import React from 'react'
import { JobsEntity } from '../Model/JobModel'
import { Link } from 'react-router-dom'

export interface JobProps {
    job: JobsEntity
}

function JobCard({job} : JobProps) {

  return (
    <>
    <div className='relative my-5 p-5 bg-gray-200/50 rounded-md mt-10 md:mt-5 flex flex-col justify-between'>
        {job.companyLogo ? <div className='border w-[50px] h-[50px] rounded-lg flex items-center justify-center p-2 absolute -top-8 bg-white'>
            <img src={job.companyLogo} alt="logo" className='h-auto object-contain'/>
        </div> : null}
        
        <div className='flex items-center my-2'>
            <p className='text-xs text-gray-400'>{job.pubDate} | </p>&nbsp;
            <p className='text-xs text-gray-400 font-semibold'>{job.jobType}</p>
        </div>
        <div className='md:line-clamp-3'>
            <h1 className='font-bold text-2xl'>{job.jobTitle}</h1>
            <h3>{job.companyName}</h3>
        </div>
        <div className='font-semibold text-xs text-indigo-600 my-2 flex'>
            {job.jobGeo ? <p className='line-clamp-3'>{job.jobGeo}</p> : null}
            <p>{job.jobIndustry}</p>
        </div>
       
    </div>
        
    </>
    
  )
}

export default JobCard