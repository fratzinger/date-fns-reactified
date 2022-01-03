import { addSeconds as _addSeconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const addSeconds = reactify(_addSeconds);