import { previousThursday as _previousThursday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const previousThursday = reactify(_previousThursday);