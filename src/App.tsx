import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5

let [on, setOn] = useState<boolean>(true);
let [collapsed, setCollapsed] = useState<boolean>(false);
let [value, setValue] = useState<ValueType>(0);

function App() {

  return (
      <div>
          <AppTitle title={'This is App component'}/>
          <Rating value={5} setValue={setValue}/>
          <UncontrolledAccordion title={'Menu'} />
          <Accordion title={'Uncontrolled'} collapsed={collapsed} setCollapsed={setCollapsed}/>
          <Rating value={3} setValue={setValue}/>
          <OnOff status={on} changeStatus={setOn}/>
          <UncontrolledOnOff/>
          <UncontrolledRating/>
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
