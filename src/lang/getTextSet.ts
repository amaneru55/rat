import {LANG} from "@/enum";
import Chinese from "./testSet/Chinese";
import Japanese from "./testSet/Japanese";
import English from "./testSet/English";
import TextSet from "@/lang/testSet";

const getTextSet: (lang: LANG)=> TextSet = (lang) => {
  switch (lang) {
    case LANG.CHINESE:
      return Chinese
    case LANG.JAPANESE:
      return Japanese
    default:
      return English
  }
}

export default getTextSet
