import { sub as _sub } from "date-fns";
import { reactify } from "@vueuse/shared";

export const sub = reactify(_sub);