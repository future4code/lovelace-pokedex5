import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../../components/CardDetail/CardDetail";
import Header from "../../components/Header/Header";
import GlobalContext from "../../global/GlobalContext";

import { DetailsContainer } from "./styles";

function DetailPage() {
  const {
    state,
    requests: { getPokemonDetail },
  } = useContext(GlobalContext);

  const { id } = useParams();

  useEffect(() => {
    getPokemonDetail(id);
  }, [id]);

  const renderDetails = () => {
    if (!state.details) return null;

    return (
      <CardDetail
        url={"url"}
        name={state.details.name}
        backImage={state.details.sprites?.back_default}
        frontImage={state.details.sprites?.front_default}
        stats={state.details.stats}
        types={state.details.types}
        abilities={state.details.abilities}
      />
    );
  };

  return (
    <div>
      <Header title="Detalhes" />
      <DetailsContainer>{renderDetails()}</DetailsContainer>
    </div>
  );
}

export default DetailPage;
