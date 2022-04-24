import React from 'react'
import anh from "../../../images/desginProject.png"
import { Link } from 'react-router-dom'

function CreateTour(props) {
    return (
        <div >
            <div className="mb-5 tour" >
                <div className="container">
                    <Link to="/create-tour"></Link>
                </div>
            </div>
        </div>
    )
}

CreateTour.propTypes = {

}

export default CreateTour

