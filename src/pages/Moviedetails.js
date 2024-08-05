import React, { useEffect, useState } from 'react'
import { fetchTrending } from '../services/useDetail'
import Card2 from '../components/Card2'

export default function Moviedetails() {
    const [data, setdata] = useState([])
    const getdata = async()=>{
        // console.log(await fetchTrending());
        return await fetchTrending()
    }
    useEffect(()=>{
        async function getapi(){
            setdata(await getdata())
        }
        getapi()
    },[])
  return (
    <div>
      {data.map((doc, index)=>(<Card2 key={index} index={index} data={doc}  />))}
    </div>
  )
}
