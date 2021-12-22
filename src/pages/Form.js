import {useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import Modal from "../components/Modal";

const Form = ({initialBill, handleSubmit, buttonLabel}) => {

  const navigate = useNavigate()

  // The Form State
  const [formData, setFormData] = useState(initialBill)

  // Handle Change to Update State when Input changes
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  // HandleSubmit for when the form submited
  const handleSubmission = (event) => {
    // prevent the page from refresh
    event.preventDefault()
    // pass the formData to the handleSubmit function passes as props
    handleSubmit(formData)
    //push user back to main page
    navigate("/")

  }


    //==============================================
    const BUTTON_WRAPPER_STYLES = {
      position: "relative",
      display: "flex",
      margin: "auto",
      justifyContent: "center",
      zIndex: 1,
  
      //==============================================
    };
  
    //===================================++======
    const [isOpen, setIsOpen] = useState(false);
    //===================================++======


  return (
  <>
   <div style={BUTTON_WRAPPER_STYLES}>
        {/* <button className="bg-green-500 px-2 py-1 rounded-md text-white font-semibold" onClick={() => setIsOpen(true)}>Enter the fields here</button> */}
        <button onClick={() => setIsOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <br></br>
  
  <form onSubmit={handleSubmission}>
    <input
      type="text"
      placeholder="Name of Bill"
      onChange={handleChange}
      value={formData.subject}
      name="subject"
      /><br></br>
    <input
    type="text"
    placeholder="Details of bill"
    onChange={handleChange}
    value={formData.details}
    name="details"
    /><br></br>
    <input
      type="text"
      placeholder="Due date"
      onChange={handleChange}
      value={formData.date}
      name="date"
      /><br></br>
    <input type="submit" value={buttonLabel} />
  </form>
</Modal>
{/* <Link to="/">
          <button className="bg-orange-500 px-2 py-1 rounded-md text-white font-semibold">Go Back to Home</button>
        </Link> */}
        <Link to="/">
          <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>

          </button>
        </Link>
  </div>
  </>)

  
};

export default Form;



