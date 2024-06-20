// Components
import Hero from "./_molecules/hero";
import Footer from "./_molecules/footer";

function Home() {
  return (
    <div className="h-full flex flex-col">
      <Hero className='grow' />

      <Footer />
    </div>
  );
}

export default Home;
