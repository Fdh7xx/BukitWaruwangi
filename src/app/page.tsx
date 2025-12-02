import About from "@/components/sections/about";
import Activity  from "@/components/sections/activity";
import Gallery from "@/components/sections/gallery";
import Hero from "@/components/sections/hero";
import TiketAndHours from "@/components/sections/ticket_and_hours";
import ApiRequest from "@/lib/fetcher";

export default async function HomePage () {

  const result = await ApiRequest({endPoint: "img-gallery"});
  
  return(
    <>
      <Hero/> 
      <About/>
      <Gallery data={result.data}/>
      <Activity />
      <TiketAndHours/>
    </>
  )
}