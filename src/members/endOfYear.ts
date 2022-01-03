import { endOfYear as _endOfYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const endOfYear = reactify(_endOfYear);