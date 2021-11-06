import { addMilliseconds as _addMilliseconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const addMilliseconds = reactify(_addMilliseconds);