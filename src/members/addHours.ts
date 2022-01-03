import { addHours as _addHours } from "date-fns";
import { reactify } from "@vueuse/core";

export const addHours = reactify(_addHours);