import React from "react";
import Footer from '../components/footer'

export function FooterContainer() {
  return(
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
            <Footer.Title>Beach Volleyball Tournament Management System</Footer.Title>
            <Footer.Link href="#">Project webpage for Informatics in Mechatronics project classes</Footer.Link>
            <Footer.Link href="#">Filip Babiec - 306030</Footer.Link>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  )
}