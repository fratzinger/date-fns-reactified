import { addMonths as _addMonths } from "date-fns";
import { reactify } from "@vueuse/shared";

export const addMonths = reactify(_addMonths);