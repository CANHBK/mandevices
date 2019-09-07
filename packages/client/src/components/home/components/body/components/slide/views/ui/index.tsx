import styled from "../../../../../../../../theme-styled-component";

export const SlideImage = styled.div`
      width: 100%;
      margin: 1.5em auto;
      overflow: hidden;
      position: relative;
      div {
            display: flex;
            img {
                  width: 100%;
                  height: 100%;
                  border-radius: 1em;
            }
      }
      ul {
            width: 100%;
            height: 100%;
            list-style: none;
            display: flex;
            justify-content: center;

            li {
                  display: flex;
                  justify-content: center;
                  color: white;
                  font-size: 4em;
                  position: absolute;
                  border-radius: 50%;
                  top: 50%;
                  transform: translateY(-50%);
                  height: 1em;
                  width: 1em;
                  &:hover {
                        background: linear-gradient(
                              0deg,
                              #f1c40f 0,
                              #e67e22 50%,
                              #c0392b 100%
                        );
                        cursor: pointer;
                        transition: 0.4s;
                  }

                  &:first-child {
                        left: 0.7em;
                  }
                  &:last-child {
                        right: 0.7em;
                  }
            }
      }
`;
export const ArrowCircle = styled.div`
      display: flex;
      justify-content: center;
      ol {
            flex: 3;
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            top: 95%;
            transform: translateY(-95%);

            position: absolute;
            li {
                  margin-right: 0.5em;
                  font-size: 0.8em;
                  color: white;
                  &:hover {
                        color: #f0932b;
                        cursor: pointer;
                  }
                  &:focus {
                        color: #d35400;
                  }
            }
      }
`;