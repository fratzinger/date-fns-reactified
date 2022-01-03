import { setMonth as _setMonth } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setMonth = reactify(_setMonth);