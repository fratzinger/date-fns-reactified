import { setYear as _setYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const setYear = reactify(_setYear);