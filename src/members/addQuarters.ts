import { addQuarters as _addQuarters } from "date-fns";
import { reactify } from "@vueuse/shared";

export const addQuarters = reactify(_addQuarters);