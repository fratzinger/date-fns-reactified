import { setMonth as _setMonth } from "date-fns";
import { reactify } from "@vueuse/core";

export const setMonth = reactify(_setMonth);