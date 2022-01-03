import { getHours as _getHours } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getHours = reactify(_getHours);