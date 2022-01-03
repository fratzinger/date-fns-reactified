import { setQuarter as _setQuarter } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setQuarter = reactify(_setQuarter);