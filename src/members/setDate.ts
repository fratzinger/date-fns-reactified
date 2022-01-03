import { setDate as _setDate } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setDate = reactify(_setDate);