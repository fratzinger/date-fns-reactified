import { setDate as _setDate } from "date-fns";
import { reactify } from "@vueuse/core";

export const setDate = reactify(_setDate);