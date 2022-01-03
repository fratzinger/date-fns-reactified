import { addHours as _addHours } from "date-fns";
import { reactify } from "@vueuse/shared";

export const addHours = reactify(_addHours);