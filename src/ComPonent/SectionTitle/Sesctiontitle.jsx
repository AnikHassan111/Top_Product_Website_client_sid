const Sesctiontitle = ({ heading, description }) => {
  return (
    <div className="w-fit mx-auto my-5">
      <h1 className="md:text-5xl text-3xl font-semibold">{heading}</h1>
      <div className="md:w-28 w-16 h-1 bg-black mx-auto mt-3"></div>
    </div>
  );
};

export default Sesctiontitle;
