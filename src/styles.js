import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  color: #6C6C6C;
  font-size: 24px;
  margin-left: 0;
  margin-right: 0;
  font-family: Roboto, sans-serif;
`;

const loading = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  border-top: 4px solid #FFFFFF;
  border-left: 4px solid #FFFFFF;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${loading} 2s linear infinite;
`;

const ContentSearch = styled.div`
  margin-top: 51px;
  display: flex;
  align-items: center;
  margin-left: 84px;
`;

const InputSearch = styled.input`
  width: 500px;
  margin-right: 45px;
  padding: 14px 24px 13px;
  outline: none;
  font-size: 18px;
  font-family: Roboto, sans-serif;
  border: 1px solid #C4B6B6;
  border-radius: 10px;
  ::placeholder {
    color: #C0B3B3;
   }
`;

const Button = styled.button`
  background: ${props => props.primary ? "#18AC00" : "#BFBFBF"};
  color: #FFFFFF;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  padding: 5px 17px;
  border: none;
  cursor: ${props => props.disabled ? "initial" : "pointer"};;
  font-size: 20px;
  font-family: Roboto, sans-serif;
`;

const ContentAddress = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 35px;
  background: #DFDFDF;
  border-radius: 25px;
  padding: 22px;
  margin-left: 84px;
`;

const ItemAddress = styled.div`
  display: flex;
  flex-direction: column;
  background: #DFDFDF;
  border-radius: 25px;
  padding: 22px;
  max-width: 350px;
`;

const AreaItem = styled.div`
  flex: 1;
`;

const Label = styled.text`
  font-size: 20px;
  line-height: 28px;
  color: #777777;
  font-family: Roboto, sans-serif;
  font-weight: 700;
`;

const InfoAddress = styled.text`
  display: flex;
  align-items: center;
  height: 27px;
  width: ${props => props.width + 'px' };
  margin-top: 10px;
  background: #FFFFFF;
  color: #6C6C6C;
  border-radius: 10px;
  border: 1px solid #289B00;
  padding: 8px 6px;
  font-size: 18px;
  font-family: Roboto, sans-serif;
`;

export const s = {
  Container,
  Title,
  ContentSearch,
  InputSearch,
  Button,
  ContentAddress,
  AreaItem,
  ItemAddress,
  Label,
  InfoAddress,
  Loading
}