import { endOfYesterday as _endOfYesterday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const endOfYesterday = reactify(_endOfYesterday);