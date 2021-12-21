import {useState} from "react";
import {useNavigate} from "react-router-dom"

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

  return <form onSubmit={handleSubmission}>
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
};

export default Form;