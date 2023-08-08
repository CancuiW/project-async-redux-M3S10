import React, { useState } from "react"
import { getDogs } from './../actions/index'
import { connect } from "react-redux";


const GifForm=props=>{
    const [inputValue,setInputValue]=useState("")

    const handleChange=e=>{
        setInputValue(e.target.value)
    
    }
    const handleSearch=evt=>{
        evt.preventDefault()
        props.getDogs(inputValue)
       
    }
    return (
    <form onSubmit={handleSearch}>
            <input value={inputValue} onChange={handleChange} />
        <button >Search</button>
    </form>)
}

export default connect(null,{getDogs})(GifForm);