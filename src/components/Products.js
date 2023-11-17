import React from "react";
import Sidebar from "./Sidebar";
import Monday from "./Weekdays/Monday";
import Tuesday from "./Weekdays/Tuesday";
import Saturday from "./Weekdays/Saturday";
import Wednesday from "./Weekdays/Wednesday";
import Thursday from "./Weekdays/Thursday";
import Friday from "./Weekdays/Friday";
import Sunday from "./Weekdays/Sunday";

function Products() {
  return (
    <div>
      <Sidebar />
      <Monday />
      <Tuesday />
      <Wednesday />
      <Thursday />
      <Friday />
      <Saturday />
      <Sunday />
    </div>
  );
}

export default Products;
