import React from "react";
import { Price } from './interfaces';

export type SwitcherProps = {
	currentSection: string,
    total: Price,
    setTotal: React.Dispatch<React.SetStateAction<Price>>
}

export const TotalContext = React.createContext<SwitcherProps | null>(null);