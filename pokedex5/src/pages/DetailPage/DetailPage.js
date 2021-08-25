import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../../components/CardDetail/CardDetail";
import Header from "../../components/Header/Header";
import GlobalContext from "../../global/GlobalContext";

import { DetailsContainer } from "./styles";

function DetailPage() {
  const {
    states,
    requests: { getPokemonDetail },
  } = useContext(GlobalContext);

  const { id } = useParams();

  useEffect(() => {
    getPokemonDetail(id);
  }, [id]);

  const renderDetails = () => {
    if (!states.details) return null;

    return (
      <CardDetail
        url={"url"}
        name={states.details.name}
        backImage={states.details.sprites?.back_default}
        frontImage={states.details.sprites?.front_default}
        stats={states.details.stats}
        types={states.details.types}
        abilities={states.details.abilities}
      />
    );
  };

  return (
    <div>
      <Header title="Detalhes" />
      <DetailsContainer>{renderDetails()}</DetailsContainer>
    </div>
  );
};

export default DetailPage;