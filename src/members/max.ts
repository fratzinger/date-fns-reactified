import { max as _max } from "date-fns";
import { reactify } from "@vueuse/core";

export const max = reactify(_max);