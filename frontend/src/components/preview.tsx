export default function Preview({ productName, description, price, imageURL, ratings, onClick }) {

   var starRatingStr = "";
   for (var i = 0; i < 5; i++) {
      if(i < Math.round(ratings.rate)) starRatingStr += "★";
      else starRatingStr += "☆";
   }

   return (
      <div className="block w-full h-full fixed z-[100] bg-[#00000082] left-0 top-0">
         <div className="overflow-hidden text-black relative w-[95%] h-auto bg-[white] rounded-[10px] top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 max-w-[700px]">
            
            <div style={{ backgroundImage: `url(${imageURL})` }} className="bg-[#e5e7eb] w-full h-[300px] bg-no-repeat bg-contain bg-center"></div>
            
            <div className="w-full h-auto p-[20px] box-border">
               <div className=" mb-[20px] text-[20px] flex justify-between text-[30px]">
                  <span className="mr-[20px] leading-[50px] text-[#101828] text-[40px] font-bold">{ productName }</span>
                  <span>${price}</span>
               </div>

               <div className="mb-[20px] text-[20px]">
                  <span className="mr-[20px]">{ starRatingStr }</span>
                  <span>{ratings.count || 1} reviews</span>
               </div>

               <div className="mb-[20px] text-[20px]">{description}</div>
            </div>

            <span onClick={onClick} className="flex absolute top-[20px] right-[20px] w-[25px] h-[25px] justify-center items-center text-[25px] text-[#828282] font-[arial] select-none">X</span>
         </div>

      </div>
   );
}
