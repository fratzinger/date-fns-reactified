import { max as _max } from "date-fns";
import { reactify } from "@vueuse/shared";

export const max = reactify(_max);