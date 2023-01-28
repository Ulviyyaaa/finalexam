import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

function Crud() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/users").then((response) => {
            setData(response.data)
        })
    }, [])


    const deleteFunc = (id) => {
        axios.delete(`http://localhost:8080/users/${id}`).then(() => {
            axios.get("http://localhost:8080/users").then((response) => {
                setData(response.data)
            })
        })
    }

    return (
        <div className='mainCrud'>
            <div className='cards'>
                {data.map((element, index) => {
                    return (
                        <div key={index} className='card'>
                            <i className={element.icon}></i>
                            <h4>{element.title}</h4>
                            <p>{element.description}</p>
                            <div className='cardBtn'>
                                <button onClick={() => deleteFunc(element._id)} className='crudBtn'>delete</button>
                                <Link to={`/detail/${element._id}`}><button className='crudBtn'>Go more</button></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Crud