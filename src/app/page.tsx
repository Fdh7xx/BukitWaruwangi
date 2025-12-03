import About from "@/components/sections/about";
import Accsess from "@/components/sections/accsess";
import Activity  from "@/components/sections/activity";
import Fasility from "@/components/sections/fasility";
import Gallery from "@/components/sections/gallery";
import Hero from "@/components/sections/hero";
import TiketAndHours from "@/components/sections/ticket_and_hours";
import ApiRequest from "@/lib/fetcher";

export default async function HomePage () { 

  const gallery = await ApiRequest({endPoint: "img-gallery"});
  const fasility = await ApiRequest({endPoint: "fasilities"});
  
  
  return(
    <>
      <Hero/>     
      <About/>
      <Gallery data={gallery.data}/>
      <Activity />
      <TiketAndHours/>
      <Fasility data={fasility.data}/>
      <Accsess/>
    </>
  )
}