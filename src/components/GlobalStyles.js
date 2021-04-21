import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
      margin: 0;
      padding:0;
      box-sizing: border-box;
  }
  html{
      &::-webkit-scrollbar{
          width: 0.5rem;
      }
      &::-webkit-scrollbar-thumb{
          background-color: darkgrey;
      }

      &::-webkit-scrollbar-track {
      background: white;
  }
  }

  body {
      font-family: 'Montserrat', sans-serif;
      width: 100%;
      

  }




  //h2 card game styling.
  h2 {
      font-size: 50px;
      font-family: 'Viga', sans-serif;
      font-weight: lighter;
      color: red; //for changing font-title color//
       
      @media (max-width: 1200px) {
          font-size: 40px;
        
        }


      @media (max-width: 1000px) {
          font-size: 40px;
        
        }

      @media (max-width: 700px) {
          font-size: 40px;
        
        }


      
  }


  h3 {
      font-size: 1.3rem;
      color: #333;
      padding: 1.5rem 0rem;
  }

  p{
      font-size: 1.2rem;
      line-height: 200%;
      color: #696969;

  }
  a {
      text-decoration:none;
      color: #333;

  }

  img {
     display:block; 
  }
  input{
    
    font-family: 'Montserrat', sans-serif;
  
  }

  
  // Media queries
  html {
    @media (max-width: 1700px) {
      font-size: 75%;
    }
  }





`;

export default GlobalStyles;