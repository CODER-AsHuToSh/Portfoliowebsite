

import React, { useState } from 'react'
import APIService from '../APIservices'

function Form(props) {
    const [name, setname] = useState('')
    const [description, setDescription] = useState('')

    const insertArticle = () => {
        console.log(name, description);
        console.log(JSON.stringify({ name, description }));
        APIService.InsertArticle({ name, description })
            .then(resp => props.insertedInformation(resp))
    }

    return (



        <div className="mb-3 col-5">
            <label htmlFor="name" className="form-label"><h3>Name</h3></label>
            <input type="text" className="form-control" id="name" placeholder="Please enter your name."
                value={name} onChange={e => setname(e.target.value)}


            />

            <label htmlFor="description" className="form-label"><h3>Comment</h3></label>

            <textarea className="form-control" id="description" rows="5" placeholder='Type your comment'
                value={description} onChange={e => setDescription(e.target.value)}
            ></textarea>

            <br />


            <button onClick={insertArticle} className="btn btn-success">Comment</button>
            <br/>
            <br/>





        </div>





    )
}

export default Form
