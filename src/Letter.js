// import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";

export default function Letter(props) {
    let [apenas_classe, setApenas_classe] = React.useState(props.classe)
    let [apenas_disa, setApenas_disa] = React.useState(props.desabilitado)
    console.log(apenas_classe)
    // let na_tela = (
    //     <li>
    //         <button onClick={ clicouletra} className={props.classe} disabled={props.desabilitado} >
    //             {props.letra}
    //         </button>
    //     </li>)

    

    function clicouletra() {
        if (apenas_disa===false && props.classe===false){
            apenas_disa= true
            apenas_classe ='desabi'
            setApenas_classe(apenas_classe)
            setApenas_disa(apenas_disa)
        }
        // else{

        // }
    



        // apenas_classe = 'habi'
        // apenas_disa = true
        // setApenas_classe('desabi')
        // setApenas_disa(true)
        // na_tela = (
        //     <li>
        //         <button onClick={clicouletra} className={apenas_classe} disabled={apenas_disa} >
        //             {props.letra}
        //         </button>
        //     </li>
        // )
        // let nova_array = []
        // if (i===props.botao[3]){
        //     let [cada_button, setCada_button] = React.useState([...props.botao])
        //     nova_array = [props.botao[0],'desabi',true,props.botao[3]]

        // }
        // else{
        //     nova_array = [props.botao]
        // }
        // props.set(nova_array)
    }

    return (
        <li>
            <button onClick={clicouletra} data-test="letter" className={props.classe} disabled={props.desabilitado} >
                {props.letra}
            </button>
        </li>
    );
}