import { Form, FormControl,FormControlFeedback} from 'react-bootstrap';
import { useState } from 'react';

function KK() {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const [feed,setFeed]=useState(isValid);
const hello=(e)=>{
    e.preventDefault();
}
    const handleChange = (e) => {
        setIsTouched(true);
        const lettersOnly = /^[a-zA-Z\s]*$/;
        if (lettersOnly.test(e.target.value)) {
            setInputValue(e.target.value.trimStart());
            setIsValid(true);
            
        } else {
            
            // setFeed("hello");
            setIsValid(false);
            
            
        }
    }

    return (
        <Form onSubmit={hello}>
            <FormControl
                type="text"
                value={inputValue}
                onChange={handleChange}
                isInvalid={!isValid && isTouched}
                isValid={isValid}
                required
            />
           <Form.Control.Feedback type="invalid" style={{color:"blue"}}>Only allowed letters</Form.Control.Feedback> 
        </Form>
    )
}
export default KK;
