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
        <button onClick={() => setIsOpen(true)}>Enter the fields here</button>
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
<Link to="/">
          <button>Go Back to Home</button>
        </Link>
  </div>
  </>)

  
};

export default Form;