import { addBusinessDays as _addBusinessDays } from "date-fns";
import { reactify } from "@vueuse/shared";

export const addBusinessDays = reactify(_addBusinessDays);