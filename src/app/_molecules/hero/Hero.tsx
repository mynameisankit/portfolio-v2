function Hero({ className = '' }) {
  return (
    <div className={`h-full flex flex-col justify-center items-center text-left ${className}`}>
      <h3>Hi, My name is</h3>
      <h1>Ankit Kumar</h1>
    </div>
  );
}

export default Hero;
