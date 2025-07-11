import Dropdown from "../../components/Dropdown/Dropdown";
import Banner from "../../components/Banner/Banner";
import bannerImage from "../../assets/banner-about.jpg";
import "./About.scss";

function About() {
  return (
    <main className="about">
      <Banner imageUrl={bannerImage} title="About Us" />
      <div className="about__content">
        <Dropdown title="Fiabilité" items={["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."]} />
        <Dropdown title="Respect" items={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]} />
        <Dropdown title="Service" items={["La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."]} />
        <Dropdown title="Sécurité" items={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]} />
      </div>
    </main>
  );
}

export default About;