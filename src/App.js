import './App.css';
import {useForm} from "react-hook-form";

function App() {

    const {register, handleSubmit} = useForm();
    const {register:register2, handleSubmit:handleSubmit2} = useForm();

    const submit = (data) => {
      console.log(data)
    }

    return (
        <div className="App">

            <form onSubmit={handleSubmit(submit)}>Add Cat
                <input type="text" defaultValue={""} {...register("cat")}/>
                <button>Save</button>
            </form>

            <form onSubmit={handleSubmit2(submit)}>Add Dog
                <input type="text" defaultValue={""} {...register2("dog")}/>
                <button>Save</button>
            </form>
        </div>
    );
}

export default App;