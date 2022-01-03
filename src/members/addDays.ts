import { addDays as _addDays } from "date-fns";
import { reactify } from "@vueuse/core";

export const addDays = reactify(_addDays);