import { BiSun, BiMoon } from "react-icons/bi";

import React from "react";

const Switch = () => {
  return (
    <>
      <label
        for="toggleThree"
        class="flex cursor-pointer select-none items-center"
      >
        <div class="relative">
          <input type="checkbox" id="toggleThree" class="sr-only" />
          <div class="block h-8 w-14 rounded-full bg-lightnavy"></div>
          <div class="dot absolute left-1 top-1 flex  flex-col h-6 w-6 items-center justify-center rounded-full bg-slate transition">
            <span class="active hidden">
              <BiMoon />
            </span>
            <span class="inactive text-body-color">
            <BiSun />
            </span>
          </div>
        </div>
      </label>
      <label for="themeSwitcherThree" class="themeSwitcherThree relative inline-flex cursor-pointer select-none items-center">
   <input type="checkbox" name="themeSwitcherThree" id="themeSwitcherThree" class="sr-only" />
   <div class="shadow-card flex flex-col h-[82px] w-[42px] items-center justify-center rounded-md bg-white">
      <span class=" bg-primary flex h-9 w-9 items-center justify-center rounded text-white">
         
            <BiMoon />
            
      </span>
      <span class=" text-body-color flex h-9 w-9 items-center justify-center rounded">
      <BiSun />
      </span>
   </div>
</label>
    </>
  );
};

export default Switch;
