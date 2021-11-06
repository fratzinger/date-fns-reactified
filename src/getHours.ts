import { getHours as _getHours } from "date-fns";
import { reactify } from "@vueuse/core";

export const getHours = reactify(_getHours);