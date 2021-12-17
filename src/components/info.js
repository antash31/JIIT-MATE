import { Fragment, useState } from 'react';
import Header from './Header';
import './info.css';
import db from "../firebase";
import firebase from "firebase";




 

function Info()
 {

   const [userName,setUsername]=useState("");
   const [userSector,setUserSector]=useState("");
   const [userYear,setUserYear]=useState("");
   const [userBranch,setUserBranch]=useState("");
   const [userBio,setUserBio]=useState("");
   const [userclubs,setUserclubs]=useState("");

  // const [userInfo, setUserinfo] = useState({
  //   name :"",
  //   JiitSector :"",
  //   Year:"",
  //   Branch:"",
  //   Bio:"",
  //   clubs:"",
  // });

  const submit = (e) => {
  e.preventDefault();
  db.collection("form").add({
    
     name:userName,
     JiitSector: userSector,
     Year:userYear,
     Branch:userBranch,
     Bio:userBio,
     clubs:userclubs,

  });

 
 };

 const setUserSectorr = (event)=>{
   setUserSector(event.target.value);
 };
 const setUsernamer = (event)=>{
  setUsername(event.target.value);
};
const setUserYearr = (event)=>{
  setUserYear(event.target.value);
};
const setUserBranchr = (event)=>{
  setUserBranch(event.target.value);
};

const setUserBior = (event)=>{
  setUserBio(event.target.value);
};

const setUserclubsr=(event)=>{
  setUserclubs(event.target.value);
};




  return (
   <Fragment>
     {console.log(`Username:${userName}`)}
    <section>
        <div className="container">
                    <form method="POST">
                        <h2 >EDIT INFORMATION</h2>
                        <div className="formBx">

                        <input type="text" placeholder="name" className="inpBox" name="name" value={userName} onChange={setUsernamer} autoComplete="off" required/>

                        <input type="text" placeholder="JIIT sector" className="inpBox" name="JiitSector" value={userSector} onChange={setUserSectorr} autoComplete="off" required/>

                        <input type="text" placeholder="Year" className="inpBox" name="Year" autoComplete="off" value={userYear} onChange={setUserYearr} required/>

                        <input type="text" placeholder="Branch" className="inpBox" name="Branch" value={userBranch} onChange={setUserBranchr} autoComplete="off" required/>

                        <input type="text" placeholder="Bio" className="inpBox" name="Bio" value={userBio} onChange={setUserBior} autoComplete="off" required></input>
                        <div className="checkBoxes">
                          
                             <div className="divDiv">
                               <input type="checkbox" className="check a" id="ABHIVAKTI" name="ABHIVAKTI" value="ABHIVAKTI" onChange={setUserclubsr}/>
                             <label for="ABHIVAKTI" className="label_edit">ABHIVAKTI</label>
                             </div>
                             
                             <div className="divDiv">
                             <input type="checkbox" className="check b" id="JODC" name="JODC" onChange={setUserclubsr} value="JODC"/>
                             <label for="JODC" className="label_edit" >JODC</label></div>

                              <div className="divDiv"> <input type="checkbox" className="check c" id="CINEKALA" name="CINEKALA" value="CINEKALA" onChange={setUserclubsr}/>
                             <label for="CINEKALA" className="label_edit" >CINEKALA</label></div>
                             
                             <div className="divDiv">
                             <input type="checkbox" className="check d" id="FORTISSMO" name="FORTISSMO" value="FORTISSMO" onChange={setUserclubsr}/>
                             <label for="FORTISSMO" className="label_edit">FORTISSMO</label>
                             </div>
                            
                              <div className="divDiv">  <input type="checkbox" className="check e" id="SPORTS CLUBS" name="SPORTS CLUBS" value="SPORTS CLUB" onChange={setUserclubsr}/>
                             <label for="SPORTS CLUBS" className="label_edit">SPORTS CLUBS</label>
                             </div>

                        </div>
                        
                        <button type="submit" className="submitBtn" onClick={submit}>SUBMIT</button>
                        </div>                   
                    </form> 
        </div>
    </section>
    </Fragment>
    
  );
};

export default Info;

