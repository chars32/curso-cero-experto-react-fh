import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos"
      />

      {/* Stats Dashboard */}
      <HeroStats />
    </>
  );
};

export default SearchPage;
