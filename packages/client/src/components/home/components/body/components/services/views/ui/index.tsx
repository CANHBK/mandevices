import styled from "../../../../../../../../theme-styled-component";

export const Services = styled.div`
      width: 100%;
      height: 100%;
      text-align: start;
      position: relative;
      background: #eaeff3;
`;
export const InServices = styled.div`
      width: 80%;
      margin: 1.5em auto;
      padding-top:4em;
      h2 {
            margin-left: 0.5%;
            margin-right: 0.5%;
            color: black;
            margin-top: 0%;
            width: 5.7em;
            height: 1.7em;
            line-height: 1.7em;
            font-size: 1.5em;
            padding-left: 1em;
            
      }
      h2:hover {
            background: #e67e22;
            border-radius:0.5em 0.5em 0.5em 0.5em  ;
            color: white;
            cursor: pointer;
      }
      span {
            position:absolute;
            color: grey;
            left: 9.2em;
            top:5.6em;
            font-size:1.2em;
      }
      ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            
      }
      li {
            width: 50%;
            display: flex;
            padding: 2em;
            margin-top: 3em;
            img {
                  width: 5em;
                  height: 5em;
                  margin-right: 1.6em;
            }
            h4 {
                  color: grey;
                  font-weight: lighter;
                  margin-top: 2em;
            }
            h5 {
                  color: grey;
                  margin-top: 1.5em;
            }
            h5:hover {
                  color: #e67e22;
                  cursor: pointer;
            }
      }
`;