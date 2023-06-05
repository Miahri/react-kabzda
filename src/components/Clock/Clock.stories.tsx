import React, {useEffect, useState} from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock
}

export function ClockDigitalExample () {
    return <Clock mode={'digital'}/>
}

export function ClockAnalogExample () {
    return <Clock mode={'analog'}/>
}