import React, { useState } from "react";

interface SearchJob {
    handleSearch: (term: string) => void
}

function SearchJob({ handleSearch }: { handleSearch: (term: string) => void }) {
    
    const [terms, setTerms] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearch(terms);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerms(e.target.value)
    }
    

    return (
        <>
            <div className='bg-gray-300'>
                <form onSubmit={handleSubmit} className=" p-5 my-5 flex flex-col md:flex-row gap-4 md:max-w-5xl mx-auto md:my-10">
                    <input
                        type="text"
                        name='Job'
                        placeholder="Job title, keywords or expertise..."
                        value={terms}
                        onChange={handleChange}
                        className=" flex flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 md:w-1/2"
                    />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Search
                    </button>

                </form>
            </div>
        </>
    );
}

export default SearchJob