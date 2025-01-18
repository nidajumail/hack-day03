
import Image from "next/image";
import Card from "../components/cards";

export default function ShopGridDefault() {
  return (
    <main>
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center w-full md:h-44 text-center bg-[#f9f9ff]">
        <div>
          <h1 className="text-2xl font-bold text-[#151875]">Product Details</h1>
          <p className="text-sm text-[#8f91a4] mt-2">
            <span>Home</span>
            <span className="mx-2">.</span>
            <span>Pages</span>
            <span className="mx-2">.</span>
            <span className="text-[#fb2e86]">Product Details</span>
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="my-24 mx-60">
        <h1 className="text-[#151875] font-bold">Ecommerce Accessories & Fashion Items</h1>
        <div className="text-[#8A8FB9]">About 9,620 results (0.62 seconds)</div>
        <div className="flex justify-center items-center">
          <div>Per Page:</div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-4 gap-6 text-[#151875] text-sm bg-gray-100 p-6">
          <div>
            <Card
              title={"Vel elit euismod"}
              $={"$26.00  $42.00"}
              image={"/shop-grid/1.png"}
              altText={"gray-chair"}
            />
          </div>
          <div>
            <Card
              title={"Ultricies condimentum imperdiet"}
              $={"$26.00  $42.00"}
              image={"/shop-grid/2.png"}
              altText={"gray-chair"}
            />
          </div>
          <div>
            <Card
              title={"Vitae suspendisse sed"}
              $={"$26.00  $42.00"}
              image={"/shop-grid/3.png"}
              altText={"gray-chair"}
            />
          </div>
          <div>
            <Card
              title={"Sed at fermentum"}
              $={"$26.00  $42.00"}
              image={"/shop-grid/4.png"}
              altText={"gray-chair"}
            />
          </div>
          <div>
            <Card
              title={"Fusce pellentesque at"}
              $={"$26.00  $42.00"}
              image={"/shop-grid/5.png"}
              altText={"gray-chair"}
            />
          </div>
          <div>
            <Card
              title={"Vestibulum magna laoreet"}
              $={"$26.00  $42.00"}
              image={"/shop-grid/6.png"}
              altText={"gray-chair"}
            />
          </div>
          <div>
            <Card
              title={"Sollicitudin amet orci"}
              $={"$26.00  $42.00"}
              image={"/shop-grid/7.png"}
              altText={"gray-chair"}
            />
          </div>
          <div>
            <Card
              title={"Ultrices mauris sit"}
              $={"$26.00  $42.00"}
              image={"/shop-grid/8.png"}
              altText={"gray-chair"}
            />
          </div>
          <div>
            <Card
              title={"Pellentesque condimentum ac"}
              $={"$26.00  $42.00"}
              image={"/shop-grid/9.png"}
              altText={"gray-chair"}
            />
          </div>
          <div>
            <Card
              title={"Cras scelerisque velit"}
              $={"$26.00  $42.00"}
              image={"/shop-grid/10.png"}
              altText={"gray-chair"}
            />
          </div>
          <div>
            <Card
              title={"Lectus vulputate faucibus"}
              $={"$26.00  $42.00"}
              image={"/shop-grid/11.png"}
              altText={"gray-chair"}
            />
          </div>
          <div>
            <Card
              title={"Purus risus, ut"}
              $={"$26.00  $42.00"}
              image={"/shop-grid/4.png"}
              altText={"gray-chair"}
            />
          </div>
        </div>

        {/* Watermark Section */}
        <div>
          <Image
            src={"/shop-grid/watermark.png"}
            alt="watermark"
            width={1000}
            height={200}
            className="py-6"
          />
        </div>
      </div>
    </main>
  );
}
