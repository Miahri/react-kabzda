import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
  return (
      <div>
          <AppTitle title={'This is App component'}/>
          <Rating value={5}/>
          <Accordion title={'Menu'} collapsed={true}/>
          <Rating value={3}/>
          <OnOff onOff={true}/>
          <OnOff onOff={false}/>
      </div>
  );
}

type AppTitleType = {
    title: string
}

function AppTitle(props: AppTitleType) {
    return(
        <div>{props.title}</div>
    )
}

export default App;
