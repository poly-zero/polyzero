
const ProgressBar = () => {
  return (
      <div class="bg-slate-200 w-full mx-auto pt-24">
        <div class="grid grid-cols-3">
          <button
            aria-controls="about"
            type="button"
            class="before:w-3.4 before:h-3.4 before:rounded-circle before:scale-120 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 text-slate-700 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:bg-current before:transition-all before:ease-linear before:content-[''] sm:indent-0"
            title="About"
          >
            <span class="text-slate-400">About</span>
          </button>
          <button
            aria-controls="account"
            type="button"
            class="before:w-3.4 before:h-3.4 before:rounded-circle after:top-1.25 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 text-slate-100 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:bg-white before:transition-all before:ease-linear before:content-[''] after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[''] sm:indent-0"
            title="Account"
          >
            Account
          </button>
          <button
            aria-controls="address"
            type="button"
            class="before:w-3.4 before:h-3.4 before:rounded-circle after:top-1.25 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 text-slate-100 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:border-current before:bg-white before:transition-all before:ease-linear before:content-[''] after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[''] sm:indent-0"
            title="Address"
          >
            Address
          </button>
        </div>
      </div>
  );
};

export default ProgressBar;
