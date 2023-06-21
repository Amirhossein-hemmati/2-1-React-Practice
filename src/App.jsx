import {useState} from "react";
import Input from "./components/Input"
import Title from "./components/Title"



//
function App() {

    const [count, setCount] = useState(0);

    const changeHandler = (e) => {
        setCount(e.target.value.split("").length)
    }

    return (
        <>
            <Input change = {changeHandler} />
            <Title count = {count}/>
        </>
    )
}


export default App;