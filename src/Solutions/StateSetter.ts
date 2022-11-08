import React from "react";

export default class StateSetter<T> {
  setState : React.Dispatch<React.SetStateAction<T>>; 
  
  constructor(setState : React.Dispatch<React.SetStateAction<T>>) {
    this.setState = setState; 
  }

  filterInput(e : React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    return (e.target as HTMLInputElement).value; 
  }

  setLabel(label : string) {
    return (e : React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const data = this.filterInput(e); 
      this.setState(prev => {
        return {...prev, [label] : data}
      })
    }
  }

}