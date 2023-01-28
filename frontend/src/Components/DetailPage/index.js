import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./index.scss"

function DetailPage() {
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8080/users/${id}`).then((response) => {
            setData(response.data)
        })
    }, [])
    return (
        <div>
            <div className='cardd'>
                <div className='cardWord'>
                    <i className={data.icon}></i>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                    <Link to={"/"}><button className='crudBtn'>Go back</button></Link>
                </div>
            </div>
        </div>
    )
}

export default DetailPage