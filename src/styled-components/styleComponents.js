import { Link } from "react-router-dom"
import styled from "styled-components"

////////////////////////////////////////////HEADER////////////////////////////////////////////

const HeaderContent = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
position: absolute;
top: 0;
`

const HeaderLeft = styled.div`
display:flex;
margin-left:100px;
list-style:none;
width:19rem;
justify-content: space-between;
font-size:25px;
margin-top:32px;
font-weight:bold;
`
const StyledLink = styled(Link)`
color: white;
text-decoration: none;
font-size:27px;

:hover{
color:gold
}
`

const StyledLinkButton = styled(Link)`
color:white;
text-decoration:none;
padding:10px;
background-color:transparent;
border: 2px solid gold;
border-radius:5px;
text-transform:uppercase;
font-weight:bold;

:hover{
    color:gold;
    background-color:white
}
`
const HeaderTitle = styled.div`
font-size: 45px;
font-weight:bold;
font-family:'Lobster';
margin-left:-60px;
margin-top:12px;    
`

const HeaderRight = styled.div`
margin-right:100px;
margin-top:30px;
`

const HeaderRightBasket = styled.div`
position: relative;
font-size:35px;
cursor: pointer;
`

const HeaderRightBasketNumber = styled.div`
position: absolute;
background-color:gold;
font-size:15px;
font-weight:bold;
padding:7px;
border-radius:50%;
width:15px;
height:15px;
display:grid;
place-items:center;
margin-top:-60px;
margin-left:18px;
`

const SubHeaderHomeContent = styled.div`
position:absolute;
top:40%;
margin-left:100px;
color:white;

h1{
    font-family: 'Lobster', cursive;
    font-size:70px;
}

p{
    font-size:40px;
    color:gold;
    margin-bottom:30px
}
`

////////////////////////////////////////////HEADER TOGGLE////////////////////////////////////////////

const HeaderToggleContent = styled.div`
top:0;
position:fixed;
z-index:10;
right: 0;
background-color: white;
width: 24rem;
height: 100vh;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`

const ToggleTop = styled.div`

p{
    margin-left:-8rem;
    font-size:32px;
    font-weight:bold;
    cursor: pointer;
    margin-top:10px;
}

h3{
    font-family: "lobster";
    font-size:30px;
}
`
const ToggleBottom = styled.div`

    h3{
        font-family:"lobster";
        font-size:30px;
        margin-bottom:10px;
        text-align:center
    }

    button{
        margin-bottom:30px;
        padding:5px;
        width:18rem;
        height:3rem;
        border:none;
        border-radius:5px;
        cursor: pointer;
        background-color:gold;
        color:white;
        font-weight: bold;
        font-size:20px;
        text-transform:uppercase;

    }
`

////////////////////////////////////////////HOME FEATURED////////////////////////////////////////////

const FeaturedContent = styled.div`
margin-top:30px;
margin-bottom:20px;

`
const FeaturedTitle = styled.div`
display : flex;
width:9rem;
justify-content: space-between;
margin-left:40rem;

span{
    font-size:35px;
    font-weight:bold;
    color:gold
}

h1{
    margin-top:1px;
}
`
const StyledFeaturedBtn = styled(Link)`
    padding:10px;
    border:none;
    border-radius:5px;
    cursor: pointer;
    background-color:gold;
    color:white;
    font-weight: bold;
    font-size:18px;
    text-transform:uppercase;
    margin-left:41rem;
    margin-bottom:20px;
    text-decoration:none;
    `

    ////////////////////////////////////////////HEADER////////////////////////////////////////////

const StyledLinkOtherPages = styled(Link)`
color: black;
text-decoration: none;
font-size:27px;

:hover{
color:gold
}
`

const StyledLogoMagnify = styled(Link)`
color: white;
width:30px;
display:grid;
place-items:center;
`

const StyledLinkFavorites = styled(Link)`
color : black;
text-decoration:none;
`

export {HeaderContent, 
        HeaderLeft, 
        HeaderTitle, 
        HeaderRight, 
        HeaderRightBasket,
        HeaderRightBasketNumber,
        SubHeaderHomeContent,
        HeaderToggleContent,
        ToggleTop,
        ToggleBottom,
        FeaturedContent,
        FeaturedTitle,
        StyledLink,
        StyledLinkButton,
        StyledFeaturedBtn,
        StyledLinkOtherPages,
        StyledLogoMagnify,
        StyledLinkFavorites
    }