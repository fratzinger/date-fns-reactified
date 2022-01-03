import { setQuarter as _setQuarter } from "date-fns";
import { reactify } from "@vueuse/core";

export const setQuarter = reactify(_setQuarter);