import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {ControlledRating} from "./components/Rating/ControlledRating";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5

let [on, setOn] = useState<boolean>(true);
let [collapsed, setCollapsed] = useState<boolean>(false);
let [value, setValue] = useState<ValueType>(0);

function App() {

  return (
      <div>
          <AppTitle title={'This is App component'}/>
          <Rating value={5} setValue={setValue}/>
          <Accordion title={'Menu'} collapsed={true}/>
          <UncontrolledAccordion title={'Uncontrolled'} collapsed={collapsed} setCollapsed={setCollapsed}/>
          <Rating value={3} setValue={setValue}/>
          <OnOff status={on} changeStatus={setOn}/>
          <UncontrolledOnOff/>
          <ControlledRating/>
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
