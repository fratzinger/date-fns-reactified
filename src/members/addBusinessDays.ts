import { addBusinessDays as _addBusinessDays } from "date-fns";
import { reactify } from "@vueuse/core";

export const addBusinessDays = reactify(_addBusinessDays);