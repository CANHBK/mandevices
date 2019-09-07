import styled from "../../../../../../../../theme-styled-component";

export const Character = styled.div`
      width: 100%;
      height:100%;
      text-align:center;
      h2{  
            margin-left:0.5%;
            color:black;
            margin-top:10%;
            width:12%;
            height:1.7em;
            line-height:1.7em;
            font-size:1.5em;
      }
      h2:hover{
            background:#e67e22;
            border-radius:0.5em 0.5em 0.5em 0.5em  ;
            color:white;
            cursor: pointer;
      }

      div{
            width: 100%;
            height:45em;
            
      }

      img {
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      }
      ul {  
            margin:0 auto;
            border-radius: 0.5em;
            width:96%;
            height: 50em;
            position: relative;
            text-align:center;
            font-weight:none;
            
      }
      img:hover{
        background: #2c3e50;
        opacity: 0.5;
      }
      ul li:nth-child(1) img {
            width: 32%;
            position: absolute;
            top:10%;
      }
      ul li:nth-child(2) img {
            width: 32%;
            position: absolute; 
            top: 10%;
            left:49%;
            transform: translateX(-49%);
      }
      ul li:nth-child(3) img {
            width: 32%;
            position: absolute;
            top: 10%;
            left: 98%;
            transform: translateX(-98%);
      }
      ul li:nth-child(4) img {
            width: 16%;
            position: absolute;
            top: 4.5em;
            left: 40.95em;
      }
      ul li:nth-child(5) img {
            width: 32%;
            position: absolute;
            top: 33.5%;
            left: 50%;
            
      }
      ul li:nth-child(6) img {
            width: 16%;
            position: absolute;
            top: 44.79%;
            left: 83.3%;
      }
      ul li:nth-child(7) img {
            width: 16%;
            position: absolute;
            top: 57%;
            left: 74.65%;
      }
      div p{
            width:50%;
            position:absolute;
            top:63%;
            color:grey;
            text-align:start;
            font-size:1em;
      }
      h4{
            
            font-size:1.2em;
            font-weight: lighter;
            text-align:start;
            color:grey;
            position:absolute;
            top:0.2em;
      }
      h5{
            position:absolute;
            top:72%;
            left:0.1%;
            text-align:center;
            color:#e67e22;
            height:2em;
            width:7em;
            border: 0.1em solid #e67e22;
            line-height:2em;
            border-radius:0.5em;
      }
      h5:hover{
            background:#e67e22;
            color:white;
            cursor: pointer;
      }
      

`;