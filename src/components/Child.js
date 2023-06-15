import React from "react"

const Child = ({SM, setSM}) => {
    return(
        <div className="child">
            <h2>Child Component</h2>
            <button onClick={() => setSM(!SM)}>Show Modal</button>
            {
                SM && <div>
                    <h3>Modal Content</h3>
                    <p>This is the modal content.</p>
                </div>
            }
        </div>
    )
}

export default Child