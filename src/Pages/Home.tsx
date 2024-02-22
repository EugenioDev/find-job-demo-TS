import React, { useEffect, useState } from 'react'
import JobCard from '../components/JobCard'
import SearchJob from '../components/SearchJob'
import { getJobs } from '../Api/getJobs'
import { JobsEntity } from '../Model/JobModel'





function Home() {

  const [jobs, setJobs] = useState<JobsEntity[]>([])
  const [filteredJobs, setFilteredJobs] = useState<JobsEntity[]>([])
  useEffect(() => {
    const getJobsData = async () => {
      try {
        const resp = await getJobs()
        if (resp?.jobs && resp.jobs.length > 0) {
          setJobs(resp.jobs)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getJobsData()
  }, [])

  const handleSearch = (term: string) => {
    filteredJobsFromSearch(term)
  }

  const filteredJobsFromSearch = (term: string) => {
    const filtered = jobs.filter(job => job.jobTitle.includes(term))
    setFilteredJobs(filtered)
  }


  return (
    <>
      <SearchJob handleSearch={handleSearch} />
      <div className='p-3 mt-5 w-full md: max-w-5xl mx-auto h-full md:grid grid-cols-2 lg:grid-cols-3 gap-2'>
        {filteredJobs && filteredJobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </>
  )
}

export default Home