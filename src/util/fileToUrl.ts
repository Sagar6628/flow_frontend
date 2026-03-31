import type React from "react";

export const fileToUrl = (input:React.ChangeEvent<HTMLInputElement>):string|null => {
    const file  = input.target.files?.[0];
    if (!file) {
       return null
    }
    return URL.createObjectURL(file);
}