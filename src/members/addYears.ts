import { addYears as _addYears } from "date-fns";
import { reactify } from "@vueuse/shared";

export const addYears = reactify(_addYears);