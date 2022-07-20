import React from "react";

  
  import { useLocation } from 'react-router-dom';
  import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
  import './Menu.css';

 
  
  
  export default function Food({ family }:{family:any}){
    return (
        <div>
            <h1>{family.name}</h1>
        </div>
    );
  }
  