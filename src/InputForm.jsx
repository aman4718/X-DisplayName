import { useState } from "react";

const InputForm = () => {
    const [formData,setFormData] = useState({
        firstname:'',
        lastname:''
    });
    const [submitData,setSubmitData] = useState(null);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitData(formData);
        setFormData({firstname:'',lastname:''})
    }
    function capitalizeFirstCharacter(str) {
        if (!str) return ''; // Handle empty or null strings
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Full Name Display</h1>
                    <div>
                        <label>First Name:</label>
                        <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} required/>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    {submitData && (
                        <div>
                            <p>Full Name: {capitalizeFirstCharacter(submitData.firstname)} {capitalizeFirstCharacter(submitData.lastname)}</p>
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}
export default InputForm;