import React, {useState} from 'react'
function App() {
  return (
    <div className="App">
       <Folder name="Desktop" isOpen={false}> 
          <Folder name ="Documents"  isOpen={false} >
            <File name='dogs.jpg'></File>
            <File name='cats.jpg'></File>
            </Folder>
                <Folder name = "Music"  isOpen={false}>
                  <File name="aje.mp3"></File>
                  <File name="jackson.mp3"></File>
                </Folder>
                <File name = "aaron.jpg"/>
       </Folder>
       <Folder name ="Documents"  isOpen={false} />
       <Folder name= "Dowload"  isOpen={false} />
      <File name = "products.xls"  isOpen={false}/>
    </div>
  );
}
const Folder=(props)=>{

  const [isOpen, setIsOpen] = useState(true)
  const {name, children} = props
  const handleClick=(e)=>{
    setIsOpen(!isOpen)
  }

  const handleDoubleClick=(e)=>{
    
    console.log('Double Clicked')
  }
  const direction  = isOpen ? 'down': 'right'
  return ( <div>
    <h4><span onDoubleClick={handleDoubleClick} onClick={handleClick} >  <i className=" blue folder icon"></i> <i className={`caret ${direction} icon`}></i>{name}</span> </h4>

    
    <div style={{marginLeft: '17px', marginTop: '-20px' }}> 
         {isOpen? children: null}  
    </div>
  
    </div>)
 


};

const File=(props)=>{
  const handleDoubleClick=(e)=>{
    
    console.log('Double Clicked')
  }
  
  const {name}  = props
  const fileExtension  =name.split('.')[1]
  const fileIcons ={
    mp3: 'music',
    jpg: 'file image',
    xls: 'file excel '
  }
  return ( <div> 
   <span onClick={handleDoubleClick} > <i className={`caret ${fileIcons[fileExtension]} icon`}></i> {name}</span>
   
    </div>)
 


};

export default App;
