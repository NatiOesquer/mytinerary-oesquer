

export default function Features() {
  return (
    <>
         <h1 className="text-center font-bold text-[50px]">Features</h1>
            <div className="flex justify-center items-center w-full mb-20">
                <div className="flex flex-col justify-end bg-center bg-no-repeat rounded-xl items-center w-[300px] h-[400px] mr-4" style={{backgroundImage:`url(../img/money.png)`}}>
                   
                    <p className="text-[30px] ">Currency:</p>
                </div>
                <div className="flex flex-col justify-end bg-center bg-no-repeat rounded-xl items-center w-[300px] h-[400px]  mr-4" style={{backgroundImage:`url(../img/country.png)`}}>
                    
                    <p className="text-[30px]">Country:</p>
                </div>
                <div className="flex flex-col justify-end bg-center bg-no-repeat rounded-xl items-center w-[300px] h-[400px]  mr-4" style={{backgroundImage:`url(../img/language.png)`}}>
                    
                    <p className="text-[30px]">Languagues:</p>
                </div>

            </div>
    </>
  )
}
