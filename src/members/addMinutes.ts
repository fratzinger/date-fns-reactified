import { addMinutes as _addMinutes } from "date-fns";
import { reactify } from "@vueuse/core";

export const addMinutes = reactify(_addMinutes);