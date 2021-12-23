import React from "react"
import {Link, useParams} from "react-router-dom"

const SinglePost = ({posts, edit, deleteBill}) => {
    // get the params from the url
    const params = useParams()
    const id = parseInt(params.id)

    // find the particular post the user wants to see based on the param
    const post = posts.find((p) => p.id === id)
    console.log(post)

    ////////////////////
    // Style Object
    /////////////////////
    const div = {
        textAlign: "center",
        border: "3px solid blue",
        borderRadius:"2.5em",
        width: "80%",
        margin: "30px auto"
    }


    return <div id = "singlePost" style={div}>
        <h1>{post?.subject}</h1>
        <h2>{post?.details}</h2>
        <h6>{post?.date}</h6>
        {/* <button className="bg-gray-500 px-2 py-1 rounded-md text-white font-semibold" onClick={() => edit(post)}>Edit</button><br></br> */}
        <button onClick={() => edit(post)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        </button>
        <Link to="/">
            {/* <button className="bg-blue-500 px-2 py-1 rounded-md text-white font-semibold">Go Back</button> */}
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                </svg>
            </button> 
        </Link>
         {/* <button className="bg-red-500 px-2 py-1 rounded-md text-white font-semibold" onClick={() => deleteBill(post)}>Delete</button> */}
         <button onClick={() => deleteBill(post)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </button>
    </div>
}

export default SinglePost;



