import Product_Layout from "../Layouts/Product.Layout";

export default function ProductLayoutHOC(props) {
  return (
    <>
      <Product_Layout>
        <div className="border-y-2 border-gray-400 ">
          <h1 className="text-xl font-bold ml-2">product</h1>
          {/**product name tobe fetched from redux  or databsebase on id from querry */}
        </div>
        {props.Component}
      </Product_Layout>
    </>
  );
}
