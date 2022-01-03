import { addYears as _addYears } from "date-fns";
import { reactify } from "@vueuse/core";

export const addYears = reactify(_addYears);