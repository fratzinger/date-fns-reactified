import { min as _min } from "date-fns";
import { reactify } from "@vueuse/shared";

export const min = reactify(_min);