import {useState} from 'react';
//Animation

import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../img/logo.png';
//Redux and Routes
import {fetchSearch} from "../actions/gamesAction";
import {useDispatch} from "react-redux";

import { fadeIn } from '../animations';


const Nav = () => {
    const dispatch = useDispatch();
    const [textInput,setTextInput] = useState("");

    const inputHandler = (e) => {
       setTextInput(e.target.value); 

    };
    const submitSearch = (e) => {
      e.preventDefault();
      dispatch(fetchSearch(textInput));
      setTextInput("");
    };

    const clearSearched = () => {
       dispatch ({type: "CLEAR_SEARCHED"}); 
    }
    return(
      <StyledNav variants={fadeIn} initial='hidden' animate="show">
          <Logo onClick={clearSearched}>
              <img src={logo} alt="logo"/>
              
          </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text"/>
                <button type={"submit"} onClick={submitSearch}>Search</button>
            </form>

      </StyledNav>

    );

};

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem 2rem;
        border: none;
        border-radius: 2rem 0rem 0rem 2rem;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        outline: none;

        @media (max-width:700px) {
          margin-left: 0rem;
          width: 55%;
          border-radius: 2rem 0rem 0rem 2rem;
        }



        @media (max-width:600px) {
          margin-left: 0rem;
          width: 55%;
          border-radius: 2rem 0rem 0rem 2rem;
        }

        @media (max-width: 500px) {
          margin-left: 0rem;
          width: 55%;
          border-radius: 2rem 0rem 0rem 2rem;
        }
        @media (min-width: 1200px) {
          width: 30%;
        }
      }
      
           
      
    button{
        font-size:1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        border-radius: 0rem 2rem 2rem 0rem;
        cursor: pointer;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        outline: none;

    }

`

const Logo = styled(motion.div)` 
   display:flex;
   justify-content:center;
   padding: 1rem;
   cursor: pointer;
   img{
      
      width:15%;

      @media (max-width: 1100px) {
          width: 24%;
        
        }



      @media (max-width: 700px) {
          width: 35%;
        
        }

     
    
      @media (max-width: 500px) {
          width: 50%;
        
        }
        @media (min-width: 1200px) {
          width: 15%;
        }  
   
   }


`;


export default Nav;
