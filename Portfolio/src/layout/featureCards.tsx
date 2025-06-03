import chat from "../assets/images/chat.png"
import seo from "../assets/images/seo.png"
import time from "../assets/images/time.png"
const abilities=[
    {
        imgpath:seo,
        title:"Ambitious and determined ",
        desc:"Ready for all available challenges and not afraid to learn new things "
    },
    {
        imgpath:time,
        title:"Punctual",
        desc:"Always finish on time and never late  "
    },
    {
        imgpath:chat,
        title:"Good communication",
        desc:"Will always keep communicative to help achieve the desired result without any misunderstandings"
    },
    
]
const FeatureCards = () => {
  return (
    <div className='w-full padding-x-lg '>
        <div className="mx-auto grid-3-col">
            {abilities.map(({imgpath,title,desc})=>(
                <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
                    <div className="size-14 flex items-center justify-center rounded-full">
                        <img src={imgpath} alt={title } />
                    </div>
                    <div >
                        <h3 className="text-white text-2xl font-semibold mt-2"> {title}</h3>
                        <p className="text-white-50 text-lg">{desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureCards