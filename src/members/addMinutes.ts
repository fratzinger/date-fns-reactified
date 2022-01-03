import { addMinutes as _addMinutes } from "date-fns";
import { reactify } from "@vueuse/shared";

export const addMinutes = reactify(_addMinutes);