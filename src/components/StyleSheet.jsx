import React from "react";
import "./myStyle.css";

const style = {
  fontSize: "50px"
};

function StyleSheet() {
  return (
    <div>
      <h1 className='primary' style={style}>
        {" "}
        Hola mundo{" "}
      </h1>
    </div>
  );
}

export default StyleSheet;

// Los estilos se puden enlazar stlyes.[nombre_de_la_clase_css]
// o pasandole un obj "{}" a un div o lo q se necesita
