import { addMonths as _addMonths } from "date-fns";
import { reactify } from "@vueuse/core";

export const addMonths = reactify(_addMonths);