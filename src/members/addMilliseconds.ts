import { addMilliseconds as _addMilliseconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const addMilliseconds = reactify(_addMilliseconds);