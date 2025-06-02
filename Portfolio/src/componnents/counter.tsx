import CountUp from "react-countup";
const CounterAnimated = () => {
  const counterItems = [
    { value: 2, label: "years of experience" },
    { value: 3, label: "completed project" },
  ];
  return (
    <>
      <div id="counter" className="padd-x-lg  xl:mt-0 mt-32">
        <div className="mx-auto grid-2-cols">
          {counterItems.map((item) => (
            <div className="bg-zinc-900 rounded-lg p-10 flex flex-col  ">
              <div
                key={item.label}
                className="counter-number text-white text-5xl font-bol mb-2"
              >
                
                <CountUp 
                start={0}
                end={item.value}/>
              </div>
              <div className="text-white-50 text-lg">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CounterAnimated;
