export default function FilterPanel() {
  console.log("filter");
  var Filters_Data = [
    {
      Heading: "Sub-Category",
      Component: (
        <form className="mx-4">
          <div className="flex items-center gap-2">
            <input
              id="InStock"
              type="checkbox"
              value="InStock"
              className=" w-4 h-4"
            ></input>
            <label for="InStock">In Stock</label>
          </div>
        </form>
      ),
    },
    {
      Heading: "Price",
      Component: <></>,
    },
    {
      Heading: "Availablity",
      Component: (
        <form className="mx-4">
          <div className="flex items-center gap-2">
            <input
              id="InStock"
              type="checkbox"
              value="InStock"
              className=" w-4 h-4"
            ></input>
            <label for="InStock">In Stock</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="OutOfStock"
              type="checkbox"
              value="OutOfStock"
              className=" w-4 h-4 "
            ></input>
            <label for="OutOfStock">Out Of Stock</label>
          </div>
        </form>
      ),
    },
  ];
  return (
    <>
      {Filters_Data.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-gray-100 my-2 flex-column items-center"
          >
            <span className="text-lg font-medium pl-4">{item.Heading}</span>
            <div> {item.Component}</div>
          </div>
        );
      })}
    </>
  );
}
