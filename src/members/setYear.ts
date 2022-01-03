import { setYear as _setYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setYear = reactify(_setYear);