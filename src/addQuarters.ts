import { addQuarters as _addQuarters } from "date-fns";
import { reactify } from "@vueuse/core";

export const addQuarters = reactify(_addQuarters);