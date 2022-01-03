import { setHours as _setHours } from "date-fns";
import { reactify } from "@vueuse/core";

export const setHours = reactify(_setHours);