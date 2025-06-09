import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Web1 from "../templates/Web1";
import Web2 from "../templates/Web2";
import Web3 from "../templates/Web3";
import Web4 from "../templates/Web4";
import Web5 from '../templates/Web5';
import Web6 from '../templates/Web6';


const renderCase = (num) => {
  switch (num) {
    case 1: return <Web1 />;
    case 2: return <Web2 />;
    case 3: return <Web3 />;
    case 4: return <Web4 />;
    case 5: return <Web5 />;
    case 6: return <Web6 />;
    }
  };


const Website = (props) => {
    console.log(props.styleKind);
    console.log(props.websiteNum.website);

  return (
    <div>
      {props.styleKind == "template" ? renderCase(props.websiteNum.website) :
      
       <div><p>hii AI</p></div>
       }
    </div>
  )
}

export default Website
