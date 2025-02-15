import React, { useEffect, useState } from "react"
import axios from "axios"

const Search = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => {
                setData(res.data)
                setSearch(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSearch = (e) => {
        setSearch(data.filter(s => s.name.common.includes(e.target.value)))
    }

    return (
        <>
            <h3 className="font-bold ml-5 mt-5">Search Country</h3>
            <div className="bg-light">
                <form class="max-w-md mx-auto mb-5">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." onChange={handleSearch} required />
                    </div>
                </form>

                <div className="bg-white flex justify-around">
                    <table className="table-auto">
                        <thead className="">
                            <tr className="">
                                <th className="border">Name</th>
                                <th className="border">Flag</th>
                                <th className="border">Official Name</th>
                                <th className="border">Region</th>
                                <th className="border">Population</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                search.map((country, index) => (
                                    <tr key={index} className="text-center ">
                                        <td className="border">{country.name.common}</td>
                                        <td className="border">{country.flag}</td>
                                        <td className="border">{country.name.official}</td>
                                        <td className="border">{country.region}</td>
                                        <td className="border">{country.population}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Search
