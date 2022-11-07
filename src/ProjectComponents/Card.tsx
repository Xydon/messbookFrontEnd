import React from 'react'

interface StyleBuilderInterface {
  clear() : StyleBuilderInterface; 
  add(property : React.CSSProperties) : StyleBuilderInterface; 
  compile() : React.CSSProperties; 
}

class StyleBuilder implements StyleBuilderInterface {
  private styles : React.CSSProperties = {}; 

  constructor(properties ?: React.CSSProperties) {
    if(properties !== undefined) {
      this.styles = properties; 
    }
  }

  clear(): StyleBuilder {
    this.styles = {}; 
    return this; 
  }

  add(properties: React.CSSProperties): StyleBuilder {
    this.styles = {...this.styles, ...properties}; 
    return this; 
  }
  compile(): React.CSSProperties {
    return this.styles; 
  }

}

function Card({surface = 'filled', border = 8, paddingOrder = 3, children, width}: {
  surface ?: 'filled'| 'outline', 
  border ?: 8 | 16 | 32,  
  paddingOrder ?: number, 
  children : React.ReactNode, 
  width : number 
}) {
  const styleBuilder = new StyleBuilder({width}); 



  if(surface == 'filled') {
    styleBuilder.add({backgroundColor : '#e7e7e7'}); 
  } 
  if(surface == 'outline') {
    styleBuilder.add({border : '1px solid lightgray'})
  }
  styleBuilder.add({padding : Math.min(paddingOrder, 8) * 8})
  styleBuilder.add({borderRadius : border}); 



  return (
    <div style={styleBuilder.compile()}>
      {children}
    </div>
  )
}

export default Card