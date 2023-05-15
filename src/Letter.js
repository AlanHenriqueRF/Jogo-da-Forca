import React from "react";

export default function Letter(props) {
    let [apenas_classe, setApenas_classe] = React.useState('habi')
    let [apenas_disa, setApenas_disa] = React.useState(false)
    function clicouletra(){
        setApenas_classe('desabi')
        setApenas_disa(true)
    }



    if (props.global[0] === true){
        return (
            <li>
                <button onClick={clicouletra} data-test="letter" className={props.classe} disabled={props.desabilitado} >
                    {props.letra}
                </button>
            </li>
        );}
    else{
        return (
            <li>
                <button onClick={clicouletra}  data-test="letter" className={apenas_classe} disabled={apenas_disa} >
                    {props.letra}
                </button>
            </li>
        )
    }
}

