import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight"> {/* Reduced font size for mobile */}
            <span className="opacity-0 animate-fade-in"> Hi, we are</span>
            <span className="opacity-0 animate-fade-in-delay-1 text-black dark:text-white">
              {" "}
            </span>
            ctrl
            <span className="text-primary ml-2 animate-fade-in-delay-2 flip-animation">
              {" "}
              A
            </span>
            .labs
          </h1>

          <p className="text-base md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3"> {/* Reduced font size */}
          We create seamless and stunning web interfaces that blend design with functionality. 
          At AKStack.dev, we specialize in modern front-end technologies to deliver immersive user experiences, backed by robust backend solutions that scale with your business.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

// Add the following CSS to your global styles or a relevant CSS file:
/* .flip-animation {
  display: inline-block;
  animation: flip 2s infinite;
}
@keyframes flip {
  0%, 100% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
} */
