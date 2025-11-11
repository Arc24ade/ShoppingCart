import { useEffect } from "react"

const TitleHook = (title) => {

    useEffect(()=>{
        document.title=`${title}-shoppingCart`;
    },[[title]])
  return null;
}

export default TitleHook