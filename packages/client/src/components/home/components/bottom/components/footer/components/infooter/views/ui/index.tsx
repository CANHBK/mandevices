import styled from "../../../../../../../../../../theme-styled-component";

export const InFooter = styled.div`
      width: 40%;
      ul {
            display: flex;
            position: relative;
      }
      ul li img {
            width: 8em;
            height: 8em;
            position: absolute;
            top: 7em;
            right: -35em;
            border: 2px solid grey;
            border-radius: 50%;
      }
      ul li span {
            font-family: "Pacifico", cursive;
            font-size: 3em;
            color: white;
            position: absolute;
            top: 2.2em;
            right: -15.75em;
      }
      h1 {
            color: white;
            position: absolute;
            top: 3.3em;
            left: 24em;
      }
      ol {
            color: white;
            position: absolute;
            display: flex;
            flex-wrap: wrap;
            width: 20em;
            top: 11em;
            left: 48em;
            list-style: none;
            justify-content: first baseline;
            li {
                  width: 8em;
                  display: block;
                  margin-right: -1em;
            }
      }
      h2 {
            div {
                  display: flex;
                  align-items: center;
                  position: absolute;
                  background: white;
                  border-radius: 1em;
                  height: 1.5em;
                  width: 10em;
                  left: 48.7em;
                  top: 8.1em;
                  input {
                        flex: 2;
                        border: none;
                        background: none;
                        color: grey;
                        line-height: 1.5em;
                        justify-content: start;
                        padding-left: 1em;
                        padding-right: 1em;
                  }
                  span {
                        font-size: 0.7em;
                        color: white;
                        float: right;
                        width: 1.7em;
                        height: 1.7em;
                        border-radius: 50%;
                        background: #e67e22;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-decoration: none;
                        margin-right: 0.3em;
                  }
            }
      }
`;