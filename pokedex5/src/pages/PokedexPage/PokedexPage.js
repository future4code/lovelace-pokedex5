import Header from "../../components/Header/Header";
import { useContext, useEffect } from "react";
import GlobalContext from "../../global/GlobalContext";
import CardPokedex from "../../components/CardPokedex/CardPokedex";
import {ContainerPokedex} from './styles';



function PokedexPage() {
  const { states, requests } = useContext(GlobalContext);

  const renderPokedex = () =>{
    if (states.pokedex.length === 0) {
      return <p>pokedex vazia</p>
    }

    return states.pokedex?.map(item =>{
      return  <CardPokedex name={item.name} pokemon={item}/>
    })

  }


  return (
    <div>
      <Header title="Pokedex" />
      <ContainerPokedex>
        {renderPokedex()}
      </ContainerPokedex>
    </div>
  );
}

export default PokedexPage;
