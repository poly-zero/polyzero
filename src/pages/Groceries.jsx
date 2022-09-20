import Header from "../components/Header";

const Groceries = () => {
  return (
    <div className="bg-slate-100 flex flex-col flex-grow items-center gap-6 md:items-center md:justify-center md:mt-0 md:gap-10 md:py-8">
      <Header
        text={""}
        highlightedText={"Grocery Store"}
        caption={
          "Select which applies most to you"
        }
      />
    </div>
  );
};

export default Groceries;
