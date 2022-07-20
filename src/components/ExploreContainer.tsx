import './ExploreContainer.css';
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';
import useFetch from "../hooks/useFetch";
import Food from './Food';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const { data, setData } = useFetch();

  return (
    <div className="container">
      <strong>Search a food</strong>
      <input
        type="text"
        placeholder="Type your favorite food"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value})}
      /> 
    </div>
  );
};

export default ExploreContainer;
