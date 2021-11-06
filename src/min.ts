import { min as _min } from "date-fns";
import { reactify } from "@vueuse/core";

export const min = reactify(_min);