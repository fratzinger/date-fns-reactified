import { setHours as _setHours } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setHours = reactify(_setHours);