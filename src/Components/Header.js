import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice'
import {useSelector} from 'react-redux'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false); 
    const cars = useSelector(selectCars);
    console.log(cars);
    return (
        <Container>
            <a>
                <img src="/Pictures/logo.svg" alt=""/>
            </a>
            <Menu>
                {cars && cars.map((car,index)=>(
                    <a key = {index} href = "#">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href = "#">Shop</a>
                <a href = "#">Tesla Account</a>
                <CustomMenu onClick = {()=> setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show = {burgerStatus}>
                <CloseWraper>
                    <CustomClose onClick = {()=> setBurgerStatus(false)}/>
                </CloseWraper>
                {cars && cars.map ((car, index)=>(
                    <li><a key = "index" href = "#">{car}</a></li>
                ))}
                <li><a href = "#">EXISTING INVENTORY</a></li>
                <li><a href = "#">USED INVENTORY</a></li>
                <li><a href = "#">TRADE-IN</a></li>
                <li><a href = "#">CYBERTRUCK</a></li>
                <li><a href = "#">ROADSTER</a></li>
                <li><a href = "#">SEMI</a></li>
                <li><a href = "#">POWERWALL</a></li>
                <li><a href = "#">COMMERCIAL ENERGY</a></li>
                <li><a href = "#">UTILITIES</a></li>
                <li><a href = "#">TEST DRIVE</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index:1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
        font-weight:600;
        text-transform: uppercase;
        padding : 0 10px;   
        flex-wrap: nowrap;
    }

    @media (max-width : 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    text-align: center;
    a{
        font-weight:600;
        text-transform: uppercase;
        margin-right:10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        font-weight: 600;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWraper = styled.div`
    display: flex;
    justify-content: flex-end;
`