import { endOfMonth as _endOfMonth } from "date-fns";
import { reactify } from "@vueuse/shared";

export const endOfMonth = reactify(_endOfMonth);