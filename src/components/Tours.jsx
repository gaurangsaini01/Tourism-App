import Card from "./Card";
function Tours({tours,removeTour}){
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="w-[40%] m-4  text-center">
                <h2 className="md:text-6xl sm:text-4xl mt-4 lg:px-8 md:mt-12 py-6 font-bold rounded-lg border-4 border-dotted border-blue-700">Plan with Us</h2>
            </div>
            <div className="flex justify-evenly lg:gap-x-32 gap-y-20 flex-wrap p-12 md:gap-x-16 md:gap-y-10">
                {
                    tours.map((tour)=>{
                        return (
                            <Card {...tour} removeTour={removeTour} ></Card>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Tours;