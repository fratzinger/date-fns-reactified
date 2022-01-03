import { addSeconds as _addSeconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const addSeconds = reactify(_addSeconds);