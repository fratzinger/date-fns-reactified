import { endOfMonth as _endOfMonth } from "date-fns";
import { reactify } from "@vueuse/core";

export const endOfMonth = reactify(_endOfMonth);