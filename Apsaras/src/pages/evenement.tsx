import Banner from "../components/Banner/Banner";
import { allEventsList } from "../components/data/AllEvents";
import { EventCard } from "../components/EvenementsPage/EventCards";
import HeaderComponentEvents from "../components/EvenementsPage/HeaderComponentEvents";
import Header from "../components/Header";
import SocialMediaComponent from "../components/HomePage/SocialMediaComponent/SocialMediaComponent";
import Layout from "../layout/Layout";

const Evenements = () => {
  return (
    <>
      <Header type="home" />
      <HeaderComponentEvents />
      <SocialMediaComponent type="normal" />
      <Banner page="Événements" />
      <div className="relative w-full max-w-[1448px] mx-auto px-4 pb-[80px] sm:px-6 lg:px-[130px]">
        <div className="mt-[80px] md:mt-[120px] lg:mt-[104px]">
          <div
            className="grid gap-[30px]"
            style={{
              gridTemplateColumns: "repeat(auto-fit, 376px)",
              justifyContent: "center",
            }}
          >
            {allEventsList.map((event) => (
              <EventCard
                key={event.id}
                image={event.image}
                imageIcon={event.imageIcon}
                title={event.title}
                description={event.description}
                dates={event.dates}
                showMultipleDates={event.hasMultipleDates}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout(<Evenements />);
