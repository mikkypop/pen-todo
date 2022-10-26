// UseState 1

// // React useState Hook
// import React, { useState } from 'react';

// const UseStateExample = () => {

//     // UseState SHOULD be within the main function
//     const [inputValue, setInputValue] = useState("Gerald");

//     // Create onChange function

//     // Declare OnChange
//     // Pass in event as a parameter to watch for onChange in our input
//     var onChangeMethod = (event) => {
//         const newValue = event.target.value;
//         setInputValue(newValue);
//     };

//     return (
//         <div>
//             <input placeholder="Enter Text..." onChange={onChangeMethod} />
//             {inputValue}
//         </div>
//     )
// }

// export default UseStateExample;

/*
step 1: Create your component
step 2: Create your jsx scaffolding
step 3: create or add your handler method (e.g onClick, onChange) should be within 
the function
step 4: create your constant followed by square brackets and 
implement useState.
Your constantare always two, which are the initial state and the set state
step 5: import useState and set the state to it's initial
step 6: write the method or handler to setNew State
*/
// UseState 2
import React, { useState } from 'react';

const useStateExample = () => {

    const [food, setFood] = useState("Yam");

    return (
        <div>
            <h1>My best meal is: {food}</h1>
            {/* For React it is usually camel 
            casing i.e (onClick) */}
            <button type="button"
                onClick={() => setFood("Beans")}>Update</button>
        </div>
    )
}

export default useStateExample;