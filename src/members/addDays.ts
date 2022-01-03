import { addDays as _addDays } from "date-fns";
import { reactify } from "@vueuse/shared";

export const addDays = reactify(_addDays);