import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 60px;
  background: radial-gradient(circle,rgb(194, 136, 12) 0%, rgb(47, 47, 51) 70%);
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1010px;
  margin: 0 auto;
  text-align: center;
  // bottom: 0;
  // position: sticky;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const Row = styled.div`
  display: grid;
  grid-gap: 20px
  @media (max-width: 1010px) {
    grid-template-columns: repeat(auto-fill,minmax(230px, 1fr));
  }
`

export const Link = styled.div`
  color: white;
  margin-bottom: 7px;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`

export const Title = styled.div`
  font-size: 20px;
  color: white;
  margin-bottom: 15px;
  font-weight: bold;  
`