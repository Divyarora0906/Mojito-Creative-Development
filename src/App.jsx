import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <>
      <h1 className="h-[100vh] flex-center text-3xl text-indigo-300">
        Divy Arora
      </h1>
    </>
  );
};

export default App;
