import { add as _add } from "date-fns";
import { reactify } from "@vueuse/core";

export const add = reactify(_add);