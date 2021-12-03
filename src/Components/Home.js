import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section 
                title="Model Y"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section 
                title="Model 3"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section 
                title="Model X"
                description="Order Online For Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section 
                title="Lowest Cast Solar Panels In America "
                description="Money-back gaurantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="order now"
                rightBtnText="learn more"
            />
            <Section 
                title="Solar For New Roofs"
                description="Solar Roof Casts Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="order now"
                rightBtnText="learn more"
            />
            <Section 
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="shop now"
            /> 
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
