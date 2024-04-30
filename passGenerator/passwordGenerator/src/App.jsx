import { useState,useCallback,useEffect,useRef} from 'react'



function App() {
  const [length, setLength] = useState(8)
  
const [num,setnumAllowed]=useState(false)
const [char,setcharAllowed]=useState(false)
const [pass,setPass]=useState("")
const passwordRef = useRef(null)
const passwordGenerator=useCallback(()=>{
  let password=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(num){
str+="0123456789"
  }
  if(char){
    str+="!@#$%&*()"
      }
 for (let i = 1; i <=length; i++) {
  let char = Math.floor(Math.random() * str.length + 1)
  password  += str.charAt(char)
 }
 setPass(password)

},[length,num,char,setPass])
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 100);
  window.navigator.clipboard.writeText(pass)
}, [pass])
useEffect(() => {
  passwordGenerator()
}, [length, num, char, passwordGenerator])

  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
<div className='flex items-center gap-x-1'>

     <input
          type="checkbox"
          defaultChecked={num}
          id="numberInput"
          onChange={() => {
              setnumAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setcharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>




    </div>

</div>



    </>
  )
}

export default App
