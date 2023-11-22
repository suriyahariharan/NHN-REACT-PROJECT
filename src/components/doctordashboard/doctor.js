import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import fileToArrayBuffer from 'file-to-array-buffer';
import { Buffer } from 'buffer';
import "./doctor.css";
import Navbar from '../Navbar';
import Footer from '../Footer';

import axios from 'axios';

function Userdashboard() {
    let [status,setStatus] = useState(false)
    let [show,setShow] = useState(false)
    let [text,setText] = useState("")
    let uploadfiles=()=>{
        document.getElementById('selectfile').click();}

   const[reports,setReports]=useState([]);


     const fileChangedHandler = (event) => {
            setText(event.target.value)
          }


async function Work() {
    let arr=[]
    let name=[]
    let x="";
    await axios.post(`https://medkept.herokuapp.com/doctor/report`,{"patient":`${text}`,"doctor":"0x73e989cc5E69c2254327a1bC317255EF9ADc6985"}, {
        headers: {
            'Authorization':'Bearer 62324ec714797e008a8409e6',
            'Allow-Control-Allow-Origin':'*',
        }
    }).then((res) => {
        console.log(res.data);
        // 0xCf7D63056A1363F38B0DE630d70B0F2C9B2CE6ee
        res.data.reports.map((m)=>{
            let z="https://gateway.moralisipfs.com/ipfs/"+m.substring(7);
            arr.push(z);
        })
       setReports(arr);
    })
  
    useEffect(()=>Work(),[])

}


let count=0;

  return (
    <>
    <Dashboard>
    <Navbar />
        <Sidebar show={status}>
        <button onClick={()=>setStatus(false)}>
        
        </button>
        <Profile>
        {/* <AccountCircleIcon style={{height:"150px" }}/> */}
        </Profile>
        <Name>Profile</Name>
        <Logout>
            {/* <LogoutIcon/> */}
            <span>Logout</span>
        </Logout>
        </Sidebar>
        <Main>
            <SidebarNav>
                <button onClick={()=>setStatus(true)}>
        {/* <MenuIcon/> */}
        </button>
        </SidebarNav>
            <Top src='dashboard_top.png' />
            {/* <AddButton onClick={uploadfiles}><span>+</span></AddButton> */}
            {/* <Certificate>Prescription </Certificate> */}
            {/* <sup style="color:red;">*</sup> */}
            <div className='submit_word' >Enter the Patient ID here : </div>
            <input className='submit_space' required type="text"  onChange={fileChangedHandler}/>
            
            <button className='submit_button' onClick={Work}>Submit</button>
            {/* <BlankPresentation>
            <Blank src='blank.png'/>
            <div>Nothing Present</div>
            </BlankPresentation> */}
                <Cert>
            {
                
                reports.map((e)=>
                {
                    
                    return(
                        <>
                    <D src={e}/>
                    <D src={e}/>
                    <D src={e}/>
                    <D src={e}/>
                    <D src={e}/>
                    </>
                    )}
                )
            }
                    </Cert>
        </Main>
        <Footer />
        </Dashboard>
    </>
  )
}

export default Userdashboard

const Dashboard = styled.div`
  // display: flex;
  // flex-direction: row;
  background-color: #444444;
  width: 100vw;
  height: 100vh;
  
`;

const Sidebar = styled.div`
// display:none;
    position: fixed;
    background-color:black;
    color:white;
    z-index:12;
    width: 269px;
    // height: 100vh;
    transition: all 0.6s ease;
    top:0;
    bottom:0;
    left:0;
    transform:${props => props.show ? 'translateX(0%)':'translateX(-100%)'};
`
const Main = styled.div`
// background-color:#121212;
    
`
const AddButton = styled.a`
    position:absolute;
    display:flex;
    cursor:pointer;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    width:92px;
    height:92px;
    background:linear-gradient(360deg, #9B53C7 -91.3%, #1260FD 362.5%);
    left:87vw;
    top:21vh;
    span{
        position:absolute;
        font-size:82px;
        top:-17px;
        color:#121212;
    }
`
const Certificate = styled.div`
color:#E5E5E5;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 47px;
line-height: 55px;
padding-left:20px;
`
const Blank = styled.img`
    width: 385px;
    height: 325px;
`
const Top = styled.img`
    width:100vw;
    height:27vh;
`
const BlankPresentation = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    div{
        color:#AAA6A6;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 59px;
    }
`
const SidebarNav = styled.div`
position:absolute;

`
const Profile = styled.div`
    height:150px;
    display:flex;
    justify-content: center;
    svg{
        height:150px;
        width:100px
    }
`
const Name = styled.div`
    display:flex;
    justify-content:center;
    font-size:30px;
`
const Logout = styled.div`
    display:flex;
    width:100%;
    position: absolute;
    justify-content:center;
    bottom:15vh;
    cursor:pointer;
    

`
const D= styled.img`
    height:150px;
    width:200px;

`
const Cert = styled.div`


`
const CertName=styled.span`
color:white;


`